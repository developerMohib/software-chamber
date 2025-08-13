"use client"
import React from 'react';
type GradientButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const CTAButton :React.FC<GradientButtonProps> = ({
  label,
  icon,
  onClick,
  className = "",
}) => {
    return (
    <button
      onClick={onClick}
      className={`font-outfit font-medium border border-[#646567] rounded-full px-3 py-1 flex gap-2 items-center cursor-pointer bg-gradient-to-r from-[#28303F] to-[#7a7a7a] text-white ${className}`}
    >
      {label}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default CTAButton;