import React from "react";

export const Button = ({ content = "" }: { content: string }) => {
  return (
    <button className="min-w-[166px] h-[40px] flex items-center justify-center text-center text-white text-[16px] font-semibold rounded-lg px-[32px] bg-[#0C8CE9]">
      {content}
    </button>
  );
};
