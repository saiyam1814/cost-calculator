import { ComponentPropsWithoutRef, ReactNode } from "react";

interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {
  children: ReactNode;
}

const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h1
      className={`flex items-center justify-center gap-2 text-xl border-b-2 border-white mb-3 pb-1 ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
