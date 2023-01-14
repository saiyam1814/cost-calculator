import { ChangeEvent, useState } from "react";
import Select from "../ui/Select";
import Input from "../ui/Input";

const services = ["Kubernetes"];
const kubernetes = {
  Standard: {
    size: [
      "Extra Small (RAM: 1 GB, CPU: 1 Core)",
      "Small (RAM: 2 GB, CPU: 1 Core)",
      "Medium (RAM: 4 GB, CPU: 2 Core)",
      "Large (RAM: 8 GB, CPU: 4 Core)",
    ],
  },
  Performance: {
    size: [
      "Extra Small (RAM: 16 GB, CPU: 4 Core)",
      "Small (RAM: 32 GB, CPU: 8 Core)",
      "Medium (RAM: 64 GB, CPU: 16 Core)",
      "Large (RAM: 128 GB, CPU: 32 Core)",
    ],
  },
  "Cloud Optimized": {
    size: [
        "Extra Small (RAM: 16 GB, CPU: 8 Core)",
        "Small (RAM: 32 GB, CPU: 16 Core)",
        "Medium (RAM: 64 GB, CPU: 32 Core)",
        "Large (RAM: 128 GB, CPU: 64 Core)",
    ],
  },
  "RAM Optimized": {
    size: [
        "Extra Small (RAM: 16 GB, CPU: 2 Core)",
        "Small (RAM: 32 GB, CPU: 4 Core)",
        "Medium (RAM: 64 GB, CPU: 8 Core)",
        "Large (RAM: 128 GB, CPU: 16 Core)",
    ],
  },
};

const Kubernetes = () => {
  const [formCount, setFormCount] = useState<number>(1);
  const [forms, setForms] = useState([
    { services: "", types: "", subtypes: "", size: "" , numberOfNodes: 1 },
  ]);
  //   console.log(Object.keys(types[forms[0].services]))

  function handleServiceChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    let updatedForms = [...forms];
    updatedForms[index].services = event.target.value;
    setForms(updatedForms);
  }
  function handleTypeChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    let updatedForms = [...forms];
    updatedForms[index].types = event.target.value;
    setForms(updatedForms);
  }
  function handleSubtypeChange(
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    let updatedForms = [...forms];
    updatedForms[index].size = event.target.value;
    setForms(updatedForms);
  }
  function handleNodes(event: ChangeEvent<HTMLInputElement>, index: number) {
    let updatedForms = [...forms];
    updatedForms[index].numberOfNodes = Number(event.target.value);
    setForms(updatedForms);
  }
  const handleAddClick = () => {
    setFormCount(formCount + 1);
    setForms([...forms, { services: "", types: "", subtypes: "", size: "" , numberOfNodes: 1}]);
  };
  const handleRemoveClick = (index: number) => {
    let updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
    setFormCount(formCount - 1);
  };
  const handleSubmit = () => {
    console.log(forms);
  };

  return (
    <div className="mx-10 grid grid-cols-2 gap-3">
      {[...Array(formCount)].map((e, i) => (
        <div key={i} className="border-2 p-2 rounded-lg">
          <Input
            id="numberOfNodes"
            label="Number of Nodes : "
            type="number"
            placeholder="Enter the Number of Nodes"
            value={forms[i].numberOfNodes}
            onChange={(e) => handleNodes(e, i)}
          />

          <Select
            id="kubernetes"
            label="Select a services:"
            value={forms[i].services}
            onChange={(e) => handleServiceChange(e, i)}
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
            onChange={(e) => handleSubtypeChange(e, i)}
            disabled={forms[i].types === ""}
          >
            <option value="a">Please select</option>
            {forms[i].types !== "" ? (
              <>
              {/* @ts-ignore */}
                {[...(kubernetes?.[forms[i].types]?.size)].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </>
            ) : null}
          </Select>
          <button onClick={() => handleRemoveClick(i)}>Remove</button>
        </div>
      ))}
      <div className="flex items-center gap-2 mx-10 p-2">
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Kubernetes;
