"use client";

import React from "react";

interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function BasicButton({ text, ...props }: BasicButtonProps) {
  return (
    <button
      {...props}
      className="px-[25px] py-[10px] rounded bg-[#272936] text-[#a3a5b1] font-semibold cursor-pointer transition-all duration-200 active:scale-90 hover:bg-black"
    >
      {text}
    </button>
  );
}
