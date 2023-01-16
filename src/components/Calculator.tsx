import { ChangeEvent, MouseEvent, useState } from "react";
import AddMenu from "./lib/AddMenu";
import { computeInstance, kubernetes, objectStore } from "@/data";
import type { ServiceType } from "@/data/services";
import KubernetesForm from "./services/kubernetes";
import ComputeInstanceForm from "./services/computeinstance";
import ObjectStoreForm from "./services/objectStoreForm";
import VolumesForm from "./services/volumeForm";
import LoadBalancerForm from "./services/loadBalancerForm";
import DataTransferForm from "./services/dataTransferForm"
const Kubernetes = () => {
  const [formCount, setFormCount] = useState<number>(1);
  const [forms, setForms] = useState([
    {
      services: "Kubernetes",
      types: "",
      size: "",
      numberOfNodes: "1",
      cost: "",
    },
  ]);

  function handleServiceChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    let updatedForms = [...forms];
    updatedForms[index].services = event.target.value;
    updatedForms[index].types = "";
    updatedForms[index].numberOfNodes = "1";
    updatedForms[index].size = "";
    if (event.target.value === "Load balancers")
      updatedForms[index].cost = "10";
    else updatedForms[index].cost = "";
    setForms(updatedForms);
  }
  function handleTypeChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    let updatedForms = [...forms];
    updatedForms[index].types = event.target.value;
    updatedForms[index].size = "";
    if (event.target.value === "Load balancers")
      updatedForms[index].cost = "10";
    else updatedForms[index].cost = "";
    setForms(updatedForms);
  }
  function handleSizeChange(
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    index: number,
    service: ServiceType
  ) {
    let updatedForms = [...forms];
    if (service == "Volumes") {
      updatedForms[index].size = Math.trunc(
        Number(event.target.value)
      ).toString();
    } 
    else if (service == "Data transfer") {
      updatedForms[index].size = Math.trunc(
        Number(event.target.value)
      ).toString();
    } 
    else {
      updatedForms[index].size = event.target.value;
    }
    
    if (service == "Compute Instance") {
      updatedForms[index].cost = computeInstance?.[event.target.value]?.cost;
    } else if (service === "Kubernetes") {
      console.log(updatedForms[index]);

      console.log(kubernetes?.[forms[index]?.types].size[forms[index].size]);

      updatedForms[index].cost =
        kubernetes?.[forms[index]?.types].size[forms[index].size]?.cost;
    } else if (service === "Object Store") {
      updatedForms[index].cost = objectStore[forms[index].size].cost;
    } else if (service === "Volumes") {
      updatedForms[index].cost = (Number(updatedForms[index].size) * 0.1)
        .toFixed(2)
        .toString();
    }
    else if (service === "Data Transfer") {
      updatedForms[index].cost = (Number(updatedForms[index].size) * 0.01)
        .toFixed(2)
        .toString();
    }
    setForms(updatedForms);
  }
  function handleNodes(event: ChangeEvent<HTMLInputElement>, index: number) {
    let updatedForms = [...forms];
    updatedForms[index].numberOfNodes = event.target.value;
    setForms(updatedForms);
  }
  const handleAddClick = (type: ServiceType) => {
    setFormCount((prev) => prev + 1);
    if (type === "Volumes")
      setForms([
        ...forms,
        {
          services: type,
          types: "",
          size: "10",
          numberOfNodes: "1",
          cost: "0.1",
        },
      ]);
    else if (type === "Data Transfer")
      setForms([
        ...forms,
        {
          services: type,
          types: "",
          size: "",
          numberOfNodes: "1",
          cost: "0.01",
        },
      ]);  
    else if (type === "Load balancers")
      setForms([
        ...forms,
        {
          services: type,
          types: "",
          size: "",
          numberOfNodes: "1",
          cost: "10",
        },
      ]);
    else
      setForms([
        ...forms,
        {
          services: type,
          types: "",
          size: "",
          numberOfNodes: "1",
          cost: "",
        },
      ]);
  };
  const handleRemoveClick = (index: number) => {
    let updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
    setFormCount(formCount - 1);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-10 mb-4 px-10 py-5 shadow-sm">
        <h1 className="text-2xl p-2 text-white">Civo Cost Calculator</h1>
        <AddMenu onClick={handleAddClick} />
      </div>
      <div>
        <div className="mx-2 sm:mx-10 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-white">
          {[...Array(formCount)].map((e, i) => {
            switch (forms[i]?.services as ServiceType) {
              case "Compute Instance":
                return (
                  <ComputeInstanceForm
                    i={i}
                    key={i}
                    forms={forms}
                    handleNodes={handleNodes}
                    handleRemoveClick={handleRemoveClick}
                    handleServiceChange={handleServiceChange}
                    handleTypeChange={handleTypeChange}
                    handleSizeChange={handleSizeChange}
                  />
                );
              case "Object Store":
                return (
                  <ObjectStoreForm
                    i={i}
                    key={i}
                    forms={forms}
                    handleRemoveClick={handleRemoveClick}
                    handleServiceChange={handleServiceChange}
                    handleTypeChange={handleTypeChange}
                    handleSizeChange={handleSizeChange}
                  />
                );
              case "Volumes":
                return (
                  <VolumesForm
                    i={i}
                    key={i}
                    forms={forms}
                    handleRemoveClick={handleRemoveClick}
                    handleServiceChange={handleServiceChange}
                    handleSizeChange={handleSizeChange}
                  />
                );
              case "Data Transfer":
                return (
                  <DataTransferForm
                     i={i}
                     key={i}
                     forms={forms}
                     handleRemoveClick={handleRemoveClick}
                     handleServiceChange={handleServiceChange}
                     handleSizeChange={handleSizeChange}
                    />
                  );  
              case "Load balancers":
                return (
                  <LoadBalancerForm
                    i={i}
                    key={i}
                    forms={forms}
                    handleRemoveClick={handleRemoveClick}
                    handleNodes={handleNodes}
                    handleServiceChange={handleServiceChange}
                  />
                );
              default:
                return (
                  <KubernetesForm
                    i={i}
                    key={i}
                    forms={forms}
                    handleNodes={handleNodes}
                    handleRemoveClick={handleRemoveClick}
                    handleServiceChange={handleServiceChange}
                    handleTypeChange={handleTypeChange}
                    handleSizeChange={handleSizeChange}
                  />
                );
            }
          })}
        </div>
      </div>
      <div className="mx-2 pl-3 sm:mx-10 mt-5 text-xl text-white bg-[#163B5D] rounded-lg p-2 border-2">
        <p>
          Total Kubernetes Node Cost : $
          {forms.reduce(
            (acc, el) =>
              el.services === "Kubernetes"
                ? Number(el.cost || 0) * Number(el.numberOfNodes) + acc
                : 0 + acc,
            0
          )}{" "}
          per month
        </p>
        <p>
          Total Compute Instance Cost : $
          {forms.reduce(
            (acc, el) =>
              el.services === "Compute Instance"
                ? Number(el.cost || 0) * Number(el.numberOfNodes) + acc
                : 0 + acc,
            0
          )}{" "}
          per month
        </p>
        <p>
          Total Data Transfer : $
          {forms.reduce(
            (acc, el) =>
              el.services === "Data Transfer"
                ? Number(el.cost || 0) * Number(el.size) + acc
                : 0 + acc,
            0
          ) +
          forms.reduce(
            (acc, el) =>
              el.services === "Compute Instance"
                ? Number(el.cost || 0) * Number(el.numberOfNodes) + acc
                : 0 + acc,
            0
          ) +
          forms.reduce(
            (acc, el) =>
              el.services === "Kubernetes"
                ? Number(el.cost || 0) * Number(el.numberOfNodes) + acc
                : 0 + acc,
            0
          )
          
          }{" "}
          per month
        </p>
        <p className="bg-[#0F273E] p-2 rounded-lg my-2">
          Total Cost : $
          {forms
            .reduce(
              (acc, el) =>
                Number(el.cost || 0) * Number(el.numberOfNodes) + acc,
              0
            )
            .toFixed(2)}{" "}
          per month
        </p>
      </div>
    </>
  );
};

export default Kubernetes;
