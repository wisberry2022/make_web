const CurrentActive = () => {
  const Appoint = [
    { id: '01', contents: '정토회 지도법사' },
    { id: '02', contents: '(사)에코붓다 이사장' },
    { id: '03', contents: '(사)평화재단 이사장' },
    { id: '04', contents: '(사)좋은벗들 이사장' },
    { id: '05', contents: '(사)한국제이티에스 이사장' }
  ]

  return (
    <div className="current_active active_cm">
      <div className="container">
        <h3 className="d_title">현재</h3>
        <div className="intro">
          <ul className="appoint">
            {Appoint.map((el, idx) => (
              <li key={idx}>{el.contents}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Prize = () => {
  const Prize_Arr = [
    { year: '2020', content: '제37회 니와노평화상 수상 (일본 니와노평화재단, 2020년 10월 26일)' },
    { year: '2018', content: '국민훈장 모란장 수훈(대한민국, 2018년 9월 12일)' },
    { year: '2015', content: '끄리빠사란상 수상(Bengal Buddhist Association, 2015년 6월 22일)' },
    { year: '2011', content: '제6회 통일문화대상 수상(매경미디어그룹 / 통일문화연구원, 2011년 11월 28일)' },
    { year: '2011', content: '포스코청암상 봉사상 수상(포스코청암재단, 2011년 3월 22일)' },
    { year: '2010', content: '제1회 천지종교인상 수상(천지일보, 2010년 9월 2일)' },
    { year: '2007', content: '제5회 민족화해상 수상(민족화해협력범국민협의회, 2007년 12월 13일)' },
    { year: '2006', content: '제2회 DMZ평화상 교류협력 부문 수상(강원도, 2006년 11월 22일)' },
    { year: '2002', content: '막사이사이상 평화와 국제이해 부문 수상(막사이사이 재단, 2002년 8월 31일)' },
    { year: '2000', content: '제4회 만해 포교상 수상(만해사상실천선양회, 2000년 8월 9일)' },
  ]
  return (
    <div className="prize active_cm">
      <div className="container">
        <h3 className="d_title">수상</h3>
        <div className="awarding">
          <ul className="prize_list">
            {Prize_Arr.map((el, idx) => (
              <li key={idx}>
                <span className="year">{el.year}</span>
                <span className="content">{el.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const MainActive = () => {
  return (
    <div className="main_active active_cm">
      <div className="container">
        <h3 className="d_title">
          주요활동
        </h3>
      </div>
    </div>
  )
}

const Active = () => {
  return (
    <div className="Active">
      <h2>
        법륜스님 활동
      </h2>
      <CurrentActive />
      <Prize />
      <MainActive />
    </div>
  )
}

export default Active;