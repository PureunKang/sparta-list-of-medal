const SortButton = ({ sortType, onSortChange }) => {
  return (
    <>
      <label className="text-xs pt-10 w-[80%] ml-auto flex cursor-pointer gap-2">
        <span className="label-text">금메달 순</span>
        <input
          type="radio"
          name="sortType"
          className="radio h-4 w-4"
          checked={sortType === "gold"}
          onChange={() => onSortChange("gold")}
        />
        <span className="label-text">총 메달 순</span>
        <input
          type="radio"
          name="sortType"
          className="radio h-4 w-4"
          checked={sortType === "total"}
          onChange={() => onSortChange("total")}
        />
      </label>
    </>
  );
};

export default SortButton;
