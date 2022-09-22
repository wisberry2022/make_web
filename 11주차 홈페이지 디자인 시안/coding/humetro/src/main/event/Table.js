const Table = ({ period, target, pop, announce }) => {
  const tbodyData = [period, target, pop, announce];
  const columnData = ['응모기간', '지원대상', '당첨인원', '결과발표'];

  return (
    <table>
      <thead>
        <tr>
          {new Array(2).fill(0).map((it, idx) => {
            return (
              <th key={idx}>
                {it}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((it, idx) => {
          return (
            <tr key={idx}>
              <td className="title">{columnData[idx]}</td>
              <td className="content">{it}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}

export default Table;