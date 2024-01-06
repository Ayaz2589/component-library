import React from "react";
import { twMerge } from "tailwind-merge";

type CardContainerProps = React.HTMLAttributes<HTMLDivElement>;

const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
  ...props
}) => {
  const baseClasses: string = "rounded-xl border bg-white shadow-sm";
  const mergedClasses = twMerge([baseClasses, className]);
  return (
    <div className="w-full max-w-xs" {...props}>
      <div className={mergedClasses}>{children}</div>
    </div>
  );
};

export default CardContainer;
