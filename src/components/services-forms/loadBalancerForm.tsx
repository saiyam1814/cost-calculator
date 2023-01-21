import Select from "../ui/Select";
import { services } from "@/data";
import Input from "../ui/Input";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import { useCalculatorStore } from "@/store/calculatoreStore";
import { shallow } from "zustand/shallow";

const LoadBalancerForm = ({ i }: { i: number }) => {
  const { forms, handleNodes, handleRemoveClick, handleServiceChange } =
    useCalculatorStore((state) => {
      return {
        forms: state.forms,
        handleNodes: state.handleNodes,
        handleRemoveClick: state.handleRemoveClick,
        handleServiceChange: state.handleServiceChange,
      };
    }, shallow);

  return (
    <div className="flex flex-col border-2 p-2 rounded-lg min-h-[300px]">
      <div className="flex-grow">
        <Heading>Load Balancer</Heading>
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
        <p className="text-white font-semibold">
          Cost : ${forms[i].numberOfNodes * 10} per month
        </p>
      </div>
      <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
    </div>
  );
};

export default LoadBalancerForm;
