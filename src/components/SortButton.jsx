import React from "react";

const SortButton = () => {
  return (
    <>
      <label className="text-xs pt-10 w-[80%] ml-auto flex cursor-pointer gap-2">
        <span className="label-text">금메달 순</span>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
        <span className="label-text">총 메달 순</span>
      </label>
    </>
  );
};

export default SortButton;
