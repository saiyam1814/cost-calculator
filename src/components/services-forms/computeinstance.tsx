import { computeInstance, services } from "@/data";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import { useCalculatorStore } from "@/store/calculatoreStore";
import { shallow } from "zustand/shallow";

const ComputeInstanceForm = ({ i }: { i: number }) => {
  const {
    forms,
    handleNodes,
    handleRemoveClick,
    handleServiceChange,
    handleSizeChange,
  } = useCalculatorStore((state) => {
    return {
      forms: state.forms,
      handleNodes: state.handleNodes,
      handleRemoveClick: state.handleRemoveClick,
      handleServiceChange: state.handleServiceChange,
      handleSizeChange: state.handleSizeChange,
    };
  }, shallow);
  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
        <Heading>Compute Instance</Heading>
        <Input
          id="numberOfNodes"
          label="Number of Nodes : "
          type="number"
          min="1"
          minLength={1}
          placeholder="Enter the Number of Nodes"
          value={forms[i].numberOfNodes.toString()}
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
              Data Transfer :{" "}
              {Number(computeInstance[forms[i]?.size]?.dataTransfer) *
                forms[i].numberOfNodes}{" "}
              TB
            </p>
            <p className="text-white font-semibold text-lg mb-5 ">
              Total Cost : $
              {Number(computeInstance[forms[i]?.size]?.cost) *
                forms[i].numberOfNodes}{" "}
              per month
            </p>
          </>
        ) : null}
      </div>
      <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
    </div>
  );
};

export default ComputeInstanceForm;
