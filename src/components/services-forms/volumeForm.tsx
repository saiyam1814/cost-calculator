import { services } from "@/data";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import { useCalculatorStore } from "@/store/calculatoreStore";
import { shallow } from "zustand/shallow";

const VolumesForm = ({ i }: { i: number }) => {
  const { forms, handleRemoveClick, handleServiceChange, handleSizeChange } =
    useCalculatorStore((state) => {
      return {
        forms: state.forms,
        handleRemoveClick: state.handleRemoveClick,
        handleServiceChange: state.handleServiceChange,
        handleSizeChange: state.handleSizeChange,
      };
    }, shallow);
  return (
    <div className="flex flex-col border-2 p-2 rounded-lg">
      <div className="flex-grow">
        <Heading>Volumes</Heading>
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
        {forms[i].services && forms[i].size.length > 0 ? (
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
export default VolumesForm;
