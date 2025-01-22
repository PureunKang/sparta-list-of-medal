import React, { useState } from "react";
import MedalList from "./MedalList";

const MedalInputForm = () => {
  const [nations, setNations] = useState([]);

  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addNationHandler = () => {
    if (!nation.trim()) {
      alert("국가명을 입력해 주세요.");
      return;
    }
    if (gold < 0 || silver < 0 || bronze < 0) {
      alert("메달 수는 0개 미만이 될 수 없습니다.");
      return;
    }
    const newNation = {
      id: new Date().getTime(),
      nation: nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };
    setNations([...nations, newNation]);
    setNation("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <>
      <div className="form-control w-[80%] flex flex-row gap-2">
        <input
          type="text"
          value={nation}
          placeholder="국가명"
          className="input input-bordered max-w-xs"
          onChange={(e) => {
            setNation(e.target.value);
          }}
        />
        <input
          type="number"
          value={gold}
          placeholder="금메달"
          className="input input-bordered max-w-xs"
          onChange={(e) => setGold(Number(e.target.value))}
        />
        <input
          type="number"
          value={silver}
          placeholder="은메달"
          className="input input-bordered max-w-xs"
          onChange={(e) => setSilver(Number(e.target.value))}
        />
        <input
          type="number"
          value={bronze}
          placeholder="동메달"
          className="input input-bordered max-w-xs"
          onChange={(e) => setBronze(Number(e.target.value))}
        />
        <button onClick={addNationHandler} className="btn btn-neutral">
          국가 추가
        </button>
        <button className="btn btn-neutral">업데이트</button>
      </div>
      <MedalList nations={nations} />
    </>
  );
};

export default MedalInputForm;
