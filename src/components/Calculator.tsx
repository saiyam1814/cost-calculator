import { ChangeEvent, MouseEvent, useState } from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import AddMenu from "./lib/AddMenu";
export type ServiceType =
  | "Kubernetes"
  | "Compute Instance"
  | "Object Store"
  | "Volumes"
  | "Load balancers";
const services = [
  "Kubernetes",
  "Compute Instance",
  "Object Store",
  "Volumes",
  "Load balancers",
];
const kubernetes: Kubernetustype = {
  Standard: {
    size: {
      "Extra Small (RAM: 1 GB, CPU: 1 Core)": {
        storage: "30 GB NVMe",
        dataTransfer: "1 TB",
        cost: "5",
      },
      "Small (RAM: 2 GB, CPU: 1 Core)": {
        storage: "40 GB NVMe",
        dataTransfer: "2 TB",
        cost: "10",
      },
      "Medium (RAM: 4 GB, CPU: 2 Core)": {
        storage: "50 GB NVMe",
        dataTransfer: "3 TB",
        cost: "20",
      },
      "Large (RAM: 8 GB, CPU: 4 Core)": {
        storage: "60 GB NVMe",
        dataTransfer: "4 TB",
        cost: "40",
      },
    },
  },
  Performance: {
    size: {
      "Small (RAM: 16 GB, CPU: 4 Core)": {
        storage: "60 GB NVMe",
        dataTransfer: "6 TB",
        cost: "80",
      },
      "Medium (RAM: 32 GB, CPU: 8 Core)": {
        storage: "80 GB NVMe",
        dataTransfer: "8 TB",
        cost: "160",
      },
      "Large (RAM: 64 GB, CPU: 16 Core)": {
        storage: "120 GB NVMe",
        dataTransfer: "10 TB",
        cost: "320",
      },
      "Extra Large (RAM: 128 GB, CPU: 32 Core)": {
        storage: "180 GB NVMe",
        dataTransfer: "12 TB",
        cost: "640",
      },
    },
  },
  "CPU Optimized": {
    size: {
      "Small (RAM: 16 GB, CPU: 8 Core)": {
        storage: "60 GB NVMe",
        dataTransfer: "6 TB",
        cost: "128",
      },
      "Medium (RAM: 32 GB, CPU: 16 Core)": {
        storage: "80 GB NVMe",
        dataTransfer: "8 TB",
        cost: "256",
      },
      "Large (RAM: 64 GB, CPU: 32 Core)": {
        storage: "120 GB NVMe",
        dataTransfer: "10 TB",
        cost: "512",
      },
      "Extra Large (RAM: 128 GB, CPU: 64 Core)": {
        storage: "180 GB NVMe",
        dataTransfer: "12 TB",
        cost: "1024",
      },
    },
  },
  "RAM Optimized": {
    size: {
      " Small (RAM: 16 GB, CPU: 2 Core)": {
        storage: "60 GB NVMe",
        dataTransfer: "4 TB",
        cost: "72",
      },
      "Medium (RAM: 32 GB, CPU: 4 Core)": {
        storage: "80 GB NVMe",
        dataTransfer: "6 TB",
        cost: "144",
      },
      "Large (RAM: 64 GB, CPU: 8 Core)": {
        storage: "120 GB NVMe",
        dataTransfer: "8 TB",
        cost: "288",
      },
      "Extra Large (RAM: 128 GB, CPU: 16 Core)": {
        storage: "180 GB NVMe",
        dataTransfer: "10 TB",
        cost: "576",
      },
    },
  },
};
type Kubernetustype = {
  [key: string]: {
    size: {
      [key: string]: {
        storage: string;
        dataTransfer: string;
        cost: string;
      };
    };
  };
};
type ComputeInstanceType = {
  [key: string]: {
    storage: string;
    dataTransfer: string;
    cost: string;
  };
};
const computeInstance: ComputeInstanceType = {
  "Extra Small ( RAM: 1 GB, CPU: 1 Core )": {
    storage: "25 GB NVMe",
    dataTransfer: "1 TB",
    cost: "5",
  },
  "Small ( RAM: 2 GB, CPU: 1 Core )": {
    storage: "25 GB NVMe",
    dataTransfer: "2 TB",
    cost: "10",
  },
  "Medium ( RAM: 4 GB, CPU: 2 Core )": {
    storage: "50 GB NVMe",
    dataTransfer: "3 TB",
    cost: "20",
  },
  "Large ( RAM: 8 GB, CPU: 4 Core )": {
    storage: "100 GB NVMe",
    dataTransfer: "4 TB",
    cost: "40",
  },
  "Extra Large ( RAM: 16 GB, CPU: 6 Core )": {
    storage: "150 GB NVMe",
    dataTransfer: "6 TB",
    cost: "80",
  },
  "2X Large ( RAM: 32 GB, CPU: 8 Core )": {
    storage: "200 GB NVMe",
    dataTransfer: "9 TB",
    cost: "160",
  },
};
type ObjectStoreType = {
  [key: string]: { cost: string };
};
const objectStore: ObjectStoreType = {
  "500 GB ": { cost: "5" },
  "1000 GB ": { cost: "10" },
  "1500 GB ": { cost: "15" },
  "2000 GB ": { cost: "20" },
};

const Kubernetes = () => {
  const [formCount, setFormCount] = useState<number>(1);
  const [forms, setForms] = useState([
    { services: "Kubernetes", types: "", size: "", numberOfNodes: 1, cost: "" },
  ]);
  function handleServiceChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    let updatedForms = [...forms];
    updatedForms[index].services = event.target.value;
    updatedForms[index].types = "";
    updatedForms[index].numberOfNodes = 1;
    updatedForms[index].size = "";
    if (event.target.value === "Load balancers") updatedForms[index].cost = "10";
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
    updatedForms[index].cost = "";
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
    } else {
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
    setForms(updatedForms);
  }
  function handleNodes(event: ChangeEvent<HTMLInputElement>, index: number) {
    let updatedForms = [...forms];
    updatedForms[index].numberOfNodes = Number(event.target.value);
    setForms(updatedForms);
  }
  const handleAddClick = (type: ServiceType) => {
    setFormCount((prev) => prev + 1);
    if(type === "Load balancers") setForms([
      ...forms,
      {
        services: type,
        types: "",
        size: "",
        numberOfNodes: 1,
        cost: "10",
      },
    ])
    else if (type === 'Volumes') setForms([
      ...forms,
      {
        services: type,
        types: "",
        size: "10",
        numberOfNodes: 1,
        cost: "1",
      },
    ]);
    else setForms([
      ...forms,
      {
        services: type,
        types: "",
        size: "",
        numberOfNodes: 1,
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
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(forms);
  };
  return (
    <>
      <div>
        <div className="mx-2 sm:mx-10 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(formCount)].map((e, i) => {
            switch (forms[i]?.services as ServiceType) {
              case "Compute Instance":
                return (
                  <ComputeInstance
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
                  <ObjectStore
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
                  <Volumes
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
                  <LoadBalncers
                    i={i}
                    key={i}
                    forms={forms}
                    handleRemoveClick={handleRemoveClick}
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
        <div className="flex justify-end items-center gap-10 mx-10 my-5">
          <AddMenu onClick={handleAddClick} />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="mx-2 sm:mx-10 mt-5 text-xl text-white bg-gray-700 rounded-lg p-2">
        <p>
          Total Kubernetes Node Cost : $
          {forms.reduce(
            (acc, el) =>
              el.services === "Kubernetes"
                ? Number(el.cost || 0) * el.numberOfNodes + acc
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
                ? Number(el.cost || 0) * el.numberOfNodes + acc
                : 0 + acc,
            0
          )}{" "}
          per month
        </p>
        <p className="bg-gray-600 p-1 rounded-lg">
          Total Cost : $
          {forms.reduce(
            (acc, el) => Number(el.cost || 0) * el.numberOfNodes + acc,
            0
          )}{" "}
          per month
        </p>
      </div>
    </>
  );
};

export default Kubernetes;

interface KubernetusFormProps {
  forms: any;
  i: number;
  handleNodes: (e: ChangeEvent<HTMLInputElement>, i: number) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleSizeChange: (
    e: ChangeEvent<HTMLSelectElement>,
    i: number,
    service: ServiceType
  ) => void;
  handleRemoveClick: (i: number) => void;
}

const KubernetesForm = ({
  forms,
  i,
  handleNodes,
  handleServiceChange,
  handleTypeChange,
  handleSizeChange,
  handleRemoveClick,
}: KubernetusFormProps) => {
  return (
    <div className="border-2 p-2 rounded-lg">
      <h1 className="text-center text-xl">Kubernetes Node</h1>
      <Input
        id="numberOfNodes"
        label="Number of Nodes : "
        type="number"
        min="1"
        minLength={1}
        placeholder="Enter the Number of Nodes"
        value={forms[i].numberOfNodes}
        onChange={(e) => handleNodes(e, i)}
      />

      <Select
        id="kubernetes"
        label="Select a services:"
        value={forms[i].services}
        onChange={(e) => handleServiceChange(e, i)}
        required
      >
        <option value="">Please select</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>

      <Select
        id="types"
        label="Select a type:"
        value={forms[i].types}
        onChange={(e) => handleTypeChange(e, i)}
        disabled={forms[i].services === ""}
        required
      >
        <option value="">Please select</option>
        {Object.keys(kubernetes).map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>

      <Select
        id="subtypes"
        label="Select a subtype :"
        value={forms[i].size}
        onChange={(e) => handleSizeChange(e, i, "Kubernetes")}
        disabled={forms[i].types === ""}
        required
      >
        <option value="a">Please select</option>
        {forms[i].types !== "" ? (
          <>
            {[...Object.keys(kubernetes?.[forms[i].types]?.size)].map(
              (type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              )
            )}
          </>
        ) : null}
      </Select>
      {forms[i].services &&
      forms[i].types &&
      forms[i].size &&
      forms[i].size.length > 2 ? (
        <>
          <p className="text-white font-semibold text-base">
            Storage :
            {kubernetes?.[forms[i]?.types].size[forms[i].size]?.storage}
          </p>
          <p className="text-white font-semibold text-base">
            Data Transfer:{" "}
            {
              kubernetes?.[forms[i]?.types]?.size?.[forms[i]?.size]
                ?.dataTransfer
            }
          </p>
          <p className="text-white font-semibold text-lg ">
            Total Cost : $
            {Number(kubernetes?.[forms[i]?.types].size[forms[i]?.size]?.cost) *
              forms[i].numberOfNodes}{" "}
            per month
          </p>
        </>
      ) : (
        <div className="h-[76px]" />
      )}
      <button onClick={() => handleRemoveClick(i)}>Remove</button>
    </div>
  );
};

interface ComputeInstanceProps {
  forms: any;
  i: number;
  handleNodes: (e: ChangeEvent<HTMLInputElement>, i: number) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleSizeChange: (
    e: ChangeEvent<HTMLSelectElement>,
    i: number,
    service: ServiceType
  ) => void;
  handleRemoveClick: (i: number) => void;
}

const ComputeInstance = ({
  forms,
  i,
  handleNodes,
  handleServiceChange,
  handleSizeChange,
  handleRemoveClick,
}: ComputeInstanceProps) => {
  return (
    <div className="border-2 p-2 rounded-lg">
      <h1 className="text-center text-xl">Compute Instance</h1>
      <Input
        id="numberOfNodes"
        label="Number of Nodes : "
        type="number"
        min="1"
        minLength={1}
        placeholder="Enter the Number of Nodes"
        value={forms[i].numberOfNodes}
        onChange={(e) => handleNodes(e, i)}
      />
      <Select
        id="services"
        label="Select a services:"
        value={forms[i].services}
        onChange={(e) => handleServiceChange(e, i)}
        required
      >
        <option value="">Please select</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>
      <Select
        id="compute"
        label="Select a size:"
        value={forms[i].size}
        onChange={(e) => handleSizeChange(e, i, "Compute Instance")}
        required
      >
        <option value="">Please select</option>
        {Object.keys(computeInstance).map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>
      {forms[i].services && forms[i].size.length > 2 ? (
        <>
          <p className="text-white font-semibold text-base">
            Storage : {computeInstance[forms[i]?.size]?.storage}
          </p>
          <p className="text-white font-semibold text-base">
            Data Transfer : {computeInstance[forms[i]?.size]?.dataTransfer}
          </p>
          <p className="text-white font-semibold text-lg mb-5 ">
            Total Cost : $
            {Number(computeInstance[forms[i]?.size]?.cost) *
              forms[i].numberOfNodes}{" "}
            per month
          </p>
        </>
      ) : (
        <div className="h-24" />
      )}
      <button className="mt-12" onClick={() => handleRemoveClick(i)}>
        Remove
      </button>
    </div>
  );
};
interface ObjectStoreProps {
  forms: any;
  i: number;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleSizeChange: (
    e: ChangeEvent<HTMLSelectElement>,
    i: number,
    service: ServiceType
  ) => void;
  handleRemoveClick: (i: number) => void;
}
const ObjectStore = ({
  forms,
  i,
  handleServiceChange,
  handleSizeChange,
  handleRemoveClick,
}: ObjectStoreProps) => {
  return (
    <div className="border-2 p-2 rounded-lg">
      <h1 className="text-center text-xl">Object Store</h1>
      <Select
        id="services"
        label="Select a services:"
        value={forms[i].services}
        onChange={(e) => handleServiceChange(e, i)}
        required
      >
        <option value="">Please select</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>
      <Select
        id="compute"
        label="Select a size:"
        value={forms[i].size}
        onChange={(e) => handleSizeChange(e, i, "Object Store")}
        required
      >
        <option value="">Please select</option>
        {Object.keys(objectStore).map((object) => (
          <option key={object} value={object}>
            {object}
          </option>
        ))}
      </Select>
      {forms[i].services && forms[i].size.length > 2 ? (
        <>
          <p className="text-white font-semibold text-base">
            Data Transfer : unlimited
          </p>
          <p className="text-white font-semibold text-lg mb-24 ">
            Total Cost : ${objectStore[forms[i]?.size]?.cost} per month
          </p>
        </>
      ) : (
        <div className="h-36" />
      )}
      <button className="mt-16" onClick={() => handleRemoveClick(i)}>
        Remove
      </button>
    </div>
  );
};

interface VolumesProps {
  forms: any;
  i: number;
  handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleSizeChange: (
    e: ChangeEvent<HTMLInputElement>,
    i: number,
    service: ServiceType
  ) => void;
  handleRemoveClick: (i: number) => void;
}
const Volumes = ({
  forms,
  i,
  handleServiceChange,
  handleSizeChange,
  handleRemoveClick,
}: VolumesProps) => {
  return (
    <div className="border-2 p-2 rounded-lg">
      <h1 className="text-center text-xl">Volumes</h1>
      <Select
        id="services"
        label="Select a services:"
        value={forms[i].services}
        onChange={(e) => handleServiceChange(e, i)}
        required
      >
        <option value="">Please select</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>
      <Input
        id="volumerange"
        label="Select a range"
        type="range"
        min={1}
        max={1000}
        value={forms[i].size}
        onChange={(e) => handleSizeChange(e, i, "Volumes")}
      />
      <p className="text-white font-semibold">
        Storage size : {forms[i].size} GB
      </p>
      {forms[i].services && forms[i].size > 0 ? (
        <>
          <p className="text-white font-semibold text-lg mb-24 ">
            Total Cost : ${forms[i]?.cost} per month
          </p>
        </>
      ) : (
        <div className="h-32" />
      )}
      <button className="mt-16" onClick={() => handleRemoveClick(i)}>
        Remove
      </button>
    </div>
  );
};

type LoadBalncerProps = {
  forms: any;
  i: number;
  handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleRemoveClick: (i: number) => void;
};

const LoadBalncers = ({
  forms,
  i,
  handleServiceChange,
  handleRemoveClick,
}: LoadBalncerProps) => {
  return (
    <div className="border-2 p-2 rounded-lg">
      <h1 className="text-center text-xl">Volumes</h1>
      <Select
        id="services"
        label="Select a services:"
        value={forms[i].services}
        onChange={(e) => handleServiceChange(e, i)}
        required
      >
        <option value="">Please select</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>
      <p className="text-white font-semibold mb-48">Cost : $10 per month</p>
      <button className="mt-16" onClick={() => handleRemoveClick(i)}>
        Remove
      </button>
    </div>
  );
};

