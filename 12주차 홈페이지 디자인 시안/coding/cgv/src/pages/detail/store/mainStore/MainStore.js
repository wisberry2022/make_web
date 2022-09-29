import './MainStore.scss';

const Promotion = () => {
  const promotionList = [
    { id: 1, title: '<공조2> 한정 패키지', price: '43,000원' },
    { id: 2, title: '<늑대사냥> 한정 패키지', price: '23,000원' },
    { id: 3, title: '<인생은 아름다워> 한정 패키지', price: '23,000원' },
  ];
  return (
    <div className="promotion_box">
      {promotionList.map((it, idx) => {
        return (
          <div className="promotion" key={it.id}>
            <figure className={`bg_set itm0${it.id}`}></figure>
            <strong className="name">{it.title}</strong>
            <span className="price">{it.price}</span>
            <div className="icon_box">
              {Array.from({ length: 3 }, (v, k) => k + 1).map((it) => {
                return (
                  <figure key={it} className={`bg_set icon0${it}`}></figure>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const HotDeal = () => {
  return (
    <div className="hot_deal">
      <figure className="bg_set store_bg"></figure>
      <h4>CGV HOT DEAL</h4>
      <strong>다음엔 절대 볼 수 없는 가격!</strong>
      <Promotion />
    </div>
  )
}

const MainStore = () => {
  return (
    <section className="main_store">
      <div className="container">
        <div className="title_box">
          <h3>CGV STORE</h3>
          <p>스토어에서 원하는 상품을 구매하세요!</p>
        </div>
        <HotDeal />
      </div>

    </section>
  )
}

export default MainStore;