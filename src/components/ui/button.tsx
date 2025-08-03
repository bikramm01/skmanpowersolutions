"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 font-sans";

  const sizeMap = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variantMap = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    outline:
      "border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 focus:ring-gray-500",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button
      className={clsx(base, sizeMap[size], variantMap[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
