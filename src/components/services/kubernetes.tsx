import { kubernetes } from "@/data";
import Select from "../ui/Select";
import Input from "../ui/Input";
import { services } from "@/data/services";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import { shallow } from "zustand/shallow";
import { useCalculatorStore } from "@/store/calculatoreStore";

const KubernetesForm = ({ i }: { i: number }) => {
  const {
    forms,
    handleNodes,
    handleRemoveClick,
    handleServiceChange,
    handleTypeChange,
    handleSizeChange,
  } = useCalculatorStore((state) => {
    return {
      forms: state.forms,
      handleNodes: state.handleNodes,
      handleRemoveClick: state.handleRemoveClick,
      handleTypeChange: state.handleTypeChange,
      handleServiceChange: state.handleServiceChange,
      handleSizeChange: state.handleSizeChange,
    };
  }, shallow);

  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
        <Heading>Kubernetes Node</Heading>
        <Input
          id="numberOfNodes"
          label="Number of Nodes : "
          type="number"
          placeholder="Enter the Number of Nodes"
          value={forms[i].numberOfNodes.toString()}
          onChange={(e) => handleNodes(e, i)}
          required
        />
        <Select
          id="kubernetes"
          label="Select a services:"
          value={forms[i].services}
          onChange={(e) => handleServiceChange(e, i)}
          disabled={forms[i].numberOfNodes === 0}
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
        {forms[i].size && forms[i].size.length > 2 ? (
          <>
            <p className="text-white font-semibold text-base">
              Storage :
              {kubernetes?.[forms[i]?.types].size[forms[i].size]?.storage}
            </p>
            <p className="text-white font-semibold text-base">
              Data Transfer:{" "}
              {Number(
                kubernetes?.[forms[i]?.types].size[forms[i].size].dataTransfer
              ) * Number(forms[i].numberOfNodes)}{" "}
              TB
            </p>
            <p className="text-white font-semibold text-lg ">
              Total Cost : $
              {Number(
                kubernetes?.[forms[i]?.types].size[forms[i]?.size]?.cost
              ) * forms[i].numberOfNodes}{" "}
              per month
            </p>
          </>
        ) : null}
      </div>
      <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
    </div>
  );
};

export default KubernetesForm;
