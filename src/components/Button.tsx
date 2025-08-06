import React from "react";

export const Button = ({ content = "" }: { content: string }) => {
  return (
    <button className="min-w-[166px] h-[40px] flex items-center justify-center text-center text-[16px] font-semibold px-[32px] cursor-pointer rounded-[8px] border-[2px]">
      {content}
    </button>
  );
};
