"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const TabHeader = ({ label, onClick, isActive, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        `flex justify-between items-center py-2 px-4 cursor-pointer border w-full border-black border-b-1 border-t-0 border-r-0 border-l-0 h-full max-w-[500px] font-[text-lust] text-[clamp(24px,5vw,36px)] ${
          isActive ? "font-bold" : "text-input/50"
        }`,
        className
      )}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#1A1B1D" fillOpacity="0.05" />
          <path
            d="M30.9623 28.1629L23.4316 35.6936L24.8388 37.1007L32.3695 29.5701L30.9623 28.1629Z"
            fill="#1A1B1D"
          />
          <path
            d="M24.84 12L23.43 13.41L33.57 23.55H13V25.55H35.99L36.7 23.85L24.84 12Z"
            fill="#1A1B1D"
          />
        </svg>
      )}
    </div>
  );
};

const TabContent = ({ children, isActive, index, className, ...props }) => {
  return isActive ? (
    <div {...props} className={cn("mt-4 w-full", className)}>
      {children}
    </div>
  ) : null;
};

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const headers = [];
  const contents = [];

  React.Children.forEach(children, (child) => {
    if (child.type === TabHeader) {
      headers.push(child);
    } else if (child.type === TabContent) {
      contents.push(child);
    } else if (child.props && child.props.children) {
      React.Children.forEach(child.props.children, (nestedChild) => {
        if (nestedChild.type === TabHeader) {
          headers.push(nestedChild);
        } else if (nestedChild.type === TabContent) {
          contents.push(nestedChild);
        }
      });
    }
  });

  return (
    <div className="flex max-md:flex-col-reverse gap-5">
      <div className="flex flex-col w-full">
        {headers.map((child, index) =>
          React.cloneElement(child, {
            onClick: () => handleTabClick(index),
            isActive: index === activeTab,
          })
        )}
      </div>
      <div className="w-full">
        {contents.map((child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            index,
          })
        )}
      </div>
    </div>
  );
};

export { Tabs, TabHeader, TabContent };
