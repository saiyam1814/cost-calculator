import { ChangeEvent } from "react";
import Select from "../ui/Select";
import { services } from "@/data";
import Input from "../ui/Input";

type LoadBalncerProps = {
  forms: any;
  i: number;
  handleServiceChange: (e: ChangeEvent<HTMLSelectElement>, i: number) => void;
  handleRemoveClick: (i: number) => void;
  handleNodes: (e: ChangeEvent<HTMLInputElement>, i: number) => void;
};

const LoadBalancerForm = ({
  forms,
  i,
  handleServiceChange,
  handleRemoveClick,
  handleNodes,
}: LoadBalncerProps) => {
  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
        <h1 className="text-center text-xl">Load Balancer</h1>
        <Input
          id="numberOfNodes"
          label="Number of Nodes : "
          type="number"
          placeholder="Enter the Number of Nodes"
          value={forms[i].numberOfNodes}
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
      <button
        className="inline bg-slate-400 rounded-lg p-1"
        onClick={() => handleRemoveClick(i)}
      >
        Remove
      </button>
    </div>
  );
};

export default LoadBalancerForm;
