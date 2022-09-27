const Table = ({ resultData }) => {
  const theadList = ['영화 제목', '감독', '배우', '개봉년도', '평점'];

  // const data =
  //   [
  //     {
  //       "id": 0,
  //       "title": "왕이 된 남자",
  //       "director": "나일스 아탈라|",
  //       "actor": [
  //         ""
  //       ],
  //       "pubDate": "2017",
  //       "rating": "0.00",
  //       "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1585/158599_P03_160952.jpg"
  //     },
  //     {
  //       "id": 1,
  //       "title": "광해, 왕이 된 남자",
  //       "director": "추창민|",
  //       "actor": [
  //         "이병헌",
  //         "류승룡",
  //         "한효주",
  //         ""
  //       ],
  //       "pubDate": "2012",
  //       "rating": "9.25",
  //       "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0838/83893_P09_112146.jpg"
  //     },
  //     {
  //       "id": 2,
  //       "title": "왕의 남자",
  //       "director": "이준익|",
  //       "actor": [
  //         "감우성",
  //         "정진영",
  //         "강성연",
  //         "이준기",
  //         ""
  //       ],
  //       "pubDate": "2005",
  //       "rating": "9.04",
  //       "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0398/39894_P01_125635.jpg"
  //     }
  //   ]


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