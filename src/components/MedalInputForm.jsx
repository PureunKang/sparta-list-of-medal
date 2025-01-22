import React, { useState } from "react";

const MedalInputForm = () => {
  return (
    <div className="form-control w-[80%] flex flex-row gap-2">
      <input
        type="string"
        placeholder="국가명"
        className="input input-bordered max-w-xs"
      />
      <input
        type="number"
        placeholder="금메달"
        className="input input-bordered max-w-xs"
      />
      <input
        type="number"
        placeholder="은메달"
        className="input input-bordered max-w-xs"
      />
      <input
        type="number"
        placeholder="동메달"
        className="input input-bordered max-w-xs"
      />
      {/* 버튼에 온서브밋 이벤트 */}
      <button className="btn btn-neutral">국가 추가</button>
      <button className="btn btn-neutral">업데이트</button>
    </div>
  );
};

export default MedalInputForm;
