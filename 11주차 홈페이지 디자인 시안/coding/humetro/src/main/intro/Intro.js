import './Intro.scss';

const CardSet = ({ data }) => {
  return (
    <div className="card_box">
      {data.map((el, idx) => {
        return (
          <div className="card" key={idx}>
            <h4>{el.title}</h4>
            <figure className={`bg_set itm0${el.id}`}></figure>
            <strong>{el.sub_title}</strong>
            <p>
              {el.content}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const Intro = () => {
  const cardData = [
    { id: 1, title: '적극행정', sub_title: '시민들과 소통하는 빠른 행정', content: '부산교통공사는 적극행정 확산 및 소극행정 혁파를 통한 시민편익 증진을 생각합니다. 소극행정의 개선 및 예방으로 현장과 소통하는 적극행정을 추진합니다' },
    { id: 2, title: '윤리경영', sub_title: '절대안전·시민행복·대중교통의 중심', content: '부산교통공사는 안전하고 편리한 고품격 서비스를 제공하여 고객의 절대적인 신뢰를 확보합니다. 또한 평등한 참여 기회를 보장하여 상호 신뢰와 협력관계를 구축하고자합니다.' },
    { id: 3, title: '인권경영', sub_title: '인권이 우선인 부산교통공사', content: '부산교통공사는 인간으로서 존엄과 가치를 존중하는 인권 경영을 최우선의 가치로 하며 인권침해를 사전에 예방하고 적극적인 구제를 위해 노력합니다.' }
  ]
  return (
    <section className="company_intro">
      <div className="container">
        <div className="title_box">
          <h3>부산교통공사 소개</h3>
          <p>시민의 행복이 곧 부산도시철도의 존재가치입니다</p>
        </div>
        <CardSet data={cardData} />
      </div>

    </section>
  )
}

export default Intro;