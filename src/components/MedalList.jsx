import React from "react";

const MedalList = ({ nations }) => {
  return (
    <div className="w-[80%] overflow-x-auto">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <td>국가명</td>
            <td>금메달</td>
            <td>은메달</td>
            <td>동메달</td>
            <td>총합</td>
            <td>Action</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {nations.map((n, idx) => (
            <tr key={n.id}>
              <th>{idx + 1}</th>
              <td>{n.nation}</td>
              <td>{n.gold}</td>
              <td>{n.silver}</td>
              <td>{n.bronze}</td>
              <td>{n.gold + n.silver + n.bronze}</td>
              <td>
                <button>삭제</button>
              </td>
              <th>{idx + 1}</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>국가명</td>
            <td>금메달</td>
            <td>은메달</td>
            <td>동메달</td>
            <td>총합</td>
            <td>Action</td>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MedalList;
