const MedalList = ({ nations, onRemoveNation }) => {
  return (
    <>
      <div className="pt-10 w-[80%] m-auto overflow-x-auto">
        <table className="table table-md table-pin-rows table-pin-cols text-center">
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
                  <button
                    className="btn btn-sm"
                    onClick={() => onRemoveNation(n.id)}
                  >
                    삭제
                  </button>
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
    </>
  );
};

export default MedalList;
