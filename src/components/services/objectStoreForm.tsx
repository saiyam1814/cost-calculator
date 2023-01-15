import { objectStore, services } from "@/data";
import Select from "../ui/Select";
import { ServiceType } from "@/data/services";
import { ChangeEvent } from "react";

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
const ObjectStoreForm = ({
  forms,
  i,
  handleServiceChange,
  handleSizeChange,
  handleRemoveClick,
}: ObjectStoreProps) => {
  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
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
        ) : null}
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
export default ObjectStoreForm;
