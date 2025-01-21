import React from "react";

const MedalInputForm = () => {
  return (
    <div className="w=[80%] flex gap-2">
      <input
        type="text"
        placeholder="국가명"
        className="input input-bordered max-w-xs"
      />
      <input
        type="text"
        placeholder="금메달"
        className="input input-bordered max-w-xs"
      />
      <input
        type="text"
        placeholder="은메달"
        className="input input-bordered max-w-xs"
      />
      <input
        type="text"
        placeholder="동메달"
        className="input input-bordered max-w-xs"
      />
      <button className="btn">국가 추가</button>
      <button className="btn btn-neutral">업데이트</button>
    </div>
  );
};

export default MedalInputForm;
