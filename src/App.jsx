import React, { useState, useEffect } from "react";
import MedalInputForm from "./components/MedalInputForm";
import Header from "./components/Header";
import MedalList from "./components/MedalList";
import SortButton from "./components/SortButton";

function App() {
  const [nations, setNations] = useState(() => {
    const browserValue = localStorage.getItem("MEDAL");
    if (!browserValue) return [];
    else return JSON.parse(browserValue);
  });

  const [sortType, setSortType] = useState("gold");

  useEffect(() => {
    localStorage.setItem("MEDAL", JSON.stringify(nations));
  }, [nations]);

  const sortNations = (nationsList) => {
    if (sortType === "gold") {
      return nationsList.sort((a, b) => b.gold - a.gold);
    } else {
      return nationsList.sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
    }
  };

  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
    setNations((prevNations) => sortNations([...prevNations], newSortType));
  };

  const addNation = (newNation) => {
    const isNationExisted1 = nations.some((n) => n.nation === newNation.nation);

    if (isNationExisted1) {
      alert("해당 국가의 기록이 존재합니다. '업데이트'로 진행해 주세요.");
      return;
    }

    setNations((prevNations) =>
      sortNations([...prevNations, newNation], "gold")
    );
  };

  const removeNation = (id) => {
    setNations(
      (prevNations) =>
        sortNations(
          prevNations.filter((n) => n.id !== id),
          "gold"
        ) // 정렬 포함
    );
  };

  const updateNation = (updatedNation) => {
    const isNationExisted2 = nations.some(
      (n) => n.nation === updatedNation.nation
    );

    if (!isNationExisted2) {
      alert("해당 국가의 기록이 존재하지 않습니다. '국가 추가'부터 해 주세요.");
      return;
    }

    setNations((prevNations) =>
      sortNations(
        prevNations.map((n) =>
          n.nation === updatedNation.nation ? { ...n, ...updatedNation } : n
        ),
        "gold"
      )
    );
  };

  return (
    <>
      <Header />
      <main>
        <MedalInputForm onAddNation={addNation} onUpdateNation={updateNation} />
        <SortButton sortType={sortType} onSortChange={handleSortChange} />
        <MedalList nations={nations} onRemoveNation={removeNation} />
      </main>
    </>
  );
}

export default App;
