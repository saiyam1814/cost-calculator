import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-blue-600 rounded-lg p-1 mt-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
