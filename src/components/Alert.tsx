"use client";
import { JSX } from "react";
import { MdErrorOutline, MdDone, MdWarningAmber } from "react-icons/md";

interface AlertProps {
  type: "error" | "success" | "warning";
  message: string;
}

export const Alert = ({ type, message }: AlertProps) => {
  const alertStyles: Record<
    AlertProps["type"],
    {
      icon: JSX.Element;
      bg: string;
      border: string;
      text: string;
    }
  > = {
    error: {
      icon: <MdErrorOutline />,
      bg: "bg-[#FEE2E2]",
      border: "border-[#FCA5A5]",
      text: "text-[#DC2626]",
    },
    success: {
      icon: <MdDone />,
      bg: "bg-[#D1FAE5]",
      border: "border-[#6EE7B7]",
      text: "text-[#059669]",
    },
    warning: {
      icon: <MdWarningAmber />,
      bg: "bg-[#FEF3C7]",
      border: "border-[#FCD34D]",
      text: "text-[#B45309]",
    },
  };

  const style = alertStyles[type];

  return (
    <div
      className={`w-[680px] h-[56px] flex items-center gap-3 px-[30[x]] py-[20px] rounded-[8px] border ${style.bg} ${style.border} ${style.text}`}
    >
      <div className="text-[30px] p-[18px]">{style.icon}</div>
      <span className="text-[16px] font-medium">{message}</span>
    </div>
  );
};
