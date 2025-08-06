"use client";
import React, { useState } from "react";

const tabs = [
  { label: "マスターデータ", value: "main" },
  { label: "ユーザー管理", value: "user" },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <div className="flex gap-[30px] justify-start items-center">
      {tabs.map((tab) => (
        <div
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`cursor-pointer text-center w-[348px] h-[30px] text-[16px] font-medium border-b-[2px]  ${
            activeTab === tab.value
              ? tab.value === "master"
                ? "text-black border-black"
                : "text-[#0057B8] border-[#0057B8]"
              : "text-black border-transparent"
          }`}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
