import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  variant?: "glass" | "solid" | "outlined";
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({
  variant = "solid",
  children,
  className = "",
  hover = false,
}: CardProps) => {
  const baseStyles = "rounded-xl p-6 transition-all duration-300";

  const variants = {
    glass: "glass-panel shadow-lg",
    solid: "bg-white shadow-md border border-silver-200",
    outlined: "bg-transparent border-2 border-navy-300",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
