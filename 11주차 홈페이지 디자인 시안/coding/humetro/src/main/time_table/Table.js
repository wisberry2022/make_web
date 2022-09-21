const Table = ({ data, station, code }) => {
  const theadData = ['요일구분', '역이름', '시간', '차량번호', '상/하행 구분'];
  let nData = station.map((it, idx) => {
    return it.stationSet.map((its, id) => ({
      [its.code]: its.name
    }))
  })


  const dateData = [
    { id: 0, title: '요일구분' },
    { id: 1, title: '평일' },
    { id: 2, title: '토요일' },
    { id: 3, title: '일요일' }
  ];

  const directionData = [
    { id: 0, directionSet: [] },
    { id: 1, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '노포동 방면' }, { id: 1, title: '다대포해수욕장 방면' }] },
    { id: 2, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '양산 방면' }, { id: 1, title: '장산 방면' }] },
    { id: 3, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '대저 방면' }, { id: 1, title: '수영 방면' }] },
    { id: 4, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '안평 방면' }, { id: 1, title: '미남 방면' }] },
  ];

  const dData = dateData.map((it, idx) => {
    return { [it.id]: it.title }
  })

  const ndData = directionData.map((it, idx) => {
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
          {/* {console.log(data.map((it, idx) => (n)} */}
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