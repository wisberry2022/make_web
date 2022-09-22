const Table = ({ data, station, code, direction, date }) => {
  const theadData = ['요일구분', '역이름', '시간', '차량번호', '상/하행 구분'];
  let nData = station.map((it, idx) => {
    return it.stationSet.map((its, id) => ({
      [its.code]: its.name
    }))
  })

  const dData = date.map(it => {
    return { [it.id]: it.title }
  })

  const ndData = direction.map(it => {
    return it.directionSet.map(its => ({ [its.id]: its.title }))
  })

  nData = Object.assign(...new Array().concat(...nData))
  return (
    <>
      <h4>역사 및 시간표</h4>
      <strong>{nData[code]}</strong>
      <table>
        <thead>
          <tr>
            {theadData.map((it, idx) => {
              return (
                <th key={idx}>{it}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((it, idx) => {
            return (
              <tr key={idx}>
                <th>{dData[Number(it.day)][Number(it.day)]}</th>
                <th>{nData[Number(it.scode)]}</th>
                <th>{it.hour + ' : ' + it.time}</th>
                <th>{it.trainno}</th>
                <th>{ndData[Number(it.line)][Number(it.updown) + 1][Number(it.updown)]}</th>
              </tr>
            )

          })}
        </tbody>
      </table>
    </>
  )
}

export default Table;