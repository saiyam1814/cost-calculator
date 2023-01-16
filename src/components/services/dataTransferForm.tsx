import { services } from "@/data";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { ServiceType } from "@/data/services";
import { ChangeEvent } from "react";
import Heading from "../ui/heading";
import Button from "../ui/Button";

interface dataTransfer {
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
const dataTransferForm = ({
  forms,
  i,
  handleServiceChange,
  handleSizeChange,
  handleRemoveClick,
}: VolumesProps) => {
  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
        <Heading>Data Transfer</Heading>
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
          id="datatransferrange"
          label="Select a range"
          type="range"
          min={1}
          max={1000}
          value={forms[i].size}
          onChange={(e) => handleSizeChange(e, i, "Data Transfer")}
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
        ) : null}
      </div>
      <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
    </div>
  );
};
export default dataTransferForm;
