import { computeInstance, services } from "@/data";
import Select from "../ui/Select";
import { ChangeEvent } from "react";
import { ServiceType } from "@/data/services";
import Input from "../ui/Input";

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

const ComputeInstanceForm = ({
  forms,
  i,
  handleNodes,
  handleServiceChange,
  handleSizeChange,
  handleRemoveClick,
}: ComputeInstanceProps) => {
  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
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
        ) : null}
      </div>
      <button className="inline bg-slate-400 rounded-lg p-1" onClick={() => handleRemoveClick(i)}>Remove</button>
    </div>
  );
};

export default ComputeInstanceForm;