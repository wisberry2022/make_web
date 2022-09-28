const Table = ({ resultData }) => {
  const theadList = ['영화 제목', '감독', '배우', '개봉년도', '평점'];

  return (
    <div className="table_box">
      {resultData.map((it, idx) => {
        return (
          <div key={it.id} className="table_slot">
            <div className="img_set">
              <img src={it.image} alt="cgv" />
            </div>
            <table>
              <thead>
                <tr>
                  {theadList.map((its, idx) => {
                    return (
                      <th key={idx}>{its}</th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                <td>{it.title}</td>
                <td>{it.director}</td>
                <td>{it.actor.map((its, idx) => {
                  return (
                    <strong>{its}</strong>
                  )
                }).slice(0, 3)}</td>
                <td>{it.pubDate}</td>
                <td>{it.rating}</td>
              </tbody>
            </table>

          </div>
        )
      })}
    </div>
  )
}

export default Table;