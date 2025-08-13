import React from 'react';
type GradientButtonProps = {
    label: string;
    icon?: React.ReactNode;
    className?: string;
};
const ItemButton: React.FC<GradientButtonProps> = ({
    label,
    icon,
    className = "",
}) => {
    return (
        <button
            className={`font-inter border border-[#646567] px-3 py-1 flex gap-2 items-center bg-gradient-to-r from-[#28303F] to-[#7a7a7a] text-white rounded-md ${className}`}
        >
            {icon && <span>{icon}</span>}
            {label}
        </button>
    );
};

export default ItemButton;