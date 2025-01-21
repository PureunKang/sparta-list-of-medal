import React, { useEffect, useState } from "react";
import axios from "axios";

const MedalInputForm = () => {
  const NATION_BASE_URL = "https://apis.data.go.kr/B410001/natnList/natnList";
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const fetchNationData = async () => {
    try {
      const res = await axios.get(
        `${NATION_BASE_URL}?serviceKey=${SERVICE_KEY}`
      );
      const nationItems = res.data.response.body.itemList.item;

      const koreanNames = nationItems.map((n) => n.nationNmKor);
      setCountries(koreanNames);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNationData();
  }, []);

  return (
    <div className="form-control w-[80%] flex gap-2">
      <select
        className="select select-bordered max-w-xs"
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        <option value="" disabled>
          국가명
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
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
