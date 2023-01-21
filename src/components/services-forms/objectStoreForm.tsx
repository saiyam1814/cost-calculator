import { objectStore, services } from "@/data";
import Select from "../ui/Select";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import { shallow } from "zustand/shallow";
import { useCalculatorStore } from "@/store/calculatoreStore";

const ObjectStoreForm = ({ i }: { i: number }) => {
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
        <Heading>Object Store</Heading>
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
      <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
    </div>
  );
};
export default ObjectStoreForm;
