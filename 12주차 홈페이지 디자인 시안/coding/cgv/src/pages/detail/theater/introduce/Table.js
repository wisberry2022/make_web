const Table = ({ tableData }) => {
  const theadList = ['주소', '전화번호', '상영관/전체좌석'];

  return (
    <table>
      <thead>
        <tr>
          {theadList.map((it, idx) => {
            return (
              <th key={idx}>{it}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableData.map((its, id) => {
            return (
              <td key={id}>{its}</td>
            )
          })}
        </tr>

      </tbody>
    </table>
  )
}

export default Table;