import React, { ComponentPropsWithoutRef, ReactNode } from "react";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
  children: ReactNode;
  id: string;
}

const Select = ({ label, children, required , id, className,value, ...props }: SelectProps) => {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
      <select
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        value={value}
        required={required}
        {...props}
      >
        {children}
      </select>
      { required && value === "" ? <p className="text-red-800" >This Field is Required</p> : null }
    </label>
  );
};

export default Select;
