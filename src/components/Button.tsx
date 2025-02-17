"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../styles/butres.scss"

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    icon: IconDefinition;
    variant?: "primary" | "secondary" | "danger";
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    icon,
    variant = "primary",
    className = "",
}) => {
    const baseStyles = "flex items-center justify-center font-semibold transition-all duration-200";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };

    // Si `children` est absent, on applique des styles pour un bouton rond
    const sizeStyles = children
        ? "px-4 py-2 rounded-lg gap-2"
        : "w-12 h-12 rounded-full";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`}
        >
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            {children}
        </button>
    );
};

export default Button;
