import { twMerge } from "tailwind-merge";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = BaseButtonProps & {
  variant?: "primary" | "secondary" | "tertiary";
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const baseClasses: string =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const generateVariantClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-emerald-500 hover:bg-emerald-700 text-white focus:ring-emerald-500";
      case "secondary":
        return "border-2 border-gray-200 py-[0.5rem] hover:text-white text-emerald-500 hover:border-emerald-500 hover: hover:bg-emerald-500 focus:ring-emerald-500";
      case "tertiary":
        return "border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline text-emerald-500 hover:text-emerald-700 focus:ring-emerald-500";
      default:
        return "";
    }
  };

  const variantClasses = generateVariantClasses(variant);

  const mergedClasses = twMerge([baseClasses, variantClasses]);

  return <button className={mergedClasses} {...props} />;
};

export default Button;