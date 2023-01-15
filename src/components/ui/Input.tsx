import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
  value: string;
}

const Input = ({
  label,
  id,
  value,
  required,
  className,
  ...props
}: InputProps) => {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
      <input
        id={id}
        className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        required={required}
        value={value}
        {...props}
      />
      {required && value === "" ? (
        <p className="text-red-500">This Field is Required</p>
      ) : Number(value) <= 0 ? (
        <p className="text-red-500">Number should be Positive.</p>
      ) : null}
    </label>
  );
};

export default Input;
