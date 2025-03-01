import { useState } from "react";

const MedalInputForm = ({ onAddNation, onUpdateNation }) => {
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addHandler = () => {
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

    onAddNation(newNation);
    resetFields();
  };

  const updateHandler = () => {
    if (!nation.trim()) {
      alert("국가명을 입력해 주세요.");
      return;
    }

    if (gold < 0 || silver < 0 || bronze < 0) {
      alert("메달 수는 0개 미만이 될 수 없습니다.");
      return;
    }

    const updatedNation = {
      nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    onUpdateNation(updatedNation);
    resetFields();
  };

  const resetFields = () => {
    setNation("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <>
      <div className="flex justify-center w-[90%] m-auto gap-2">
        <label className="w-[18%] text-xs input input-bordered flex items-center gap-4">
          <input
            type="text"
            value={nation}
            placeholder="국가명"
            className="grow text-sm"
            onChange={(e) => {
              setNation(e.target.value);
            }}
          />
        </label>
        <label className="w-[18%] text-xs input input-bordered flex items-center gap-4">
          금
          <input
            type="number"
            value={gold}
            className="grow text-sm"
            onChange={(e) => setGold(Number(e.target.value))}
          />
        </label>
        <label className="w-[18%] text-xs input input-bordered flex items-center gap-4">
          은
          <input
            type="number"
            value={silver}
            className="grow text-sm"
            onChange={(e) => setSilver(Number(e.target.value))}
          />
        </label>
        <label className="w-[18%] text-xs input input-bordered flex items-center gap-4">
          동
          <input
            type="number"
            value={bronze}
            className="grow text-sm"
            onChange={(e) => setBronze(Number(e.target.value))}
          />
        </label>
        <button
          onClick={addHandler}
          className="text-xs w-20 h-8 btn btn-neutral"
        >
          국가 추가
        </button>
        <button
          onClick={updateHandler}
          className="text-xs w-20 h-8 btn btn-neutral"
        >
          업데이트
        </button>
      </div>
    </>
  );
};

export default MedalInputForm;
