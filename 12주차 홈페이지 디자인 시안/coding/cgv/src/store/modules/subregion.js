const GET = 'GET';

export const getData = () => ({ type: GET });

const initialState = [
  { id: 1, title: ['CGV강변', 'CGV건대입구', 'CGV구로', 'CGV대학로', 'CGV동대문', 'CGV등촌', 'CGV명동', 'CGV명동역 씨네라이브러리', 'CGV미아', 'CGV방학', 'CGV불광', 'CGV상봉', 'CGV성신여대입구', 'CGV송파', 'CGV수유', 'CGV신촌아트레온', 'CGV압구정', 'CGV여의도', 'CGV연남', 'CGV영등포', 'CGV왕십리', 'CGV용산아이파크몰', 'CGV중계', 'CGV천호', 'CGV청담씨네시티', 'CGV피카디리1958', 'CGV하계', 'CGV홍대', 'CINE de CHEF 압구정', 'CINE de CHEF 용산아이파크몰'] },
  { id: 2, title: ['CGV경기광주', 'CGV고양행신', 'CGV광교', 'CGV광교상현', 'CGV광명역', 'CGV구리', 'CGV기흥', 'CGV김포', 'CGV김포운양', 'CGV김포한강', 'CGV동백', 'CGV동수원', 'CGV동탄', 'CGV동탄역', 'CGV동탄호수공원', 'CGV배곧', 'CGV범계', 'CGV부천', 'CGV부천역', 'CGV부천옥길', 'CGV북수원', 'CGV산본', 'CGV서현', 'CGV성남모란', 'CGV소풍', 'CGV수원', 'CGV스타필드시티위례', 'CGV시흥', 'CGV안산', 'CGV안성', 'CGV야탑', 'CGV양주옥정', 'CGV역곡', 'CGV오리(임시휴업)', 'CGV오산', 'CGV오산중앙', 'CGV용인', 'CGV의정부', 'CGV의정부태흥', 'CGV이천', 'CGV일산', 'CGV정왕', 'CGV죽전(리뉴얼중)', 'CGV파주문산', 'CGV파주야당', 'CGV판교', 'CGV평촌', 'CGV평택', 'CGV평택고덕', 'CGV평택소사', 'CGV포천', 'CGV하남미사', 'CGV화성봉담', 'CGV화정', 'DRIVE IN 곤지암'] },
  { id: 3, title: ['CGV계양', 'CGV남주안', 'CGV부평', 'CGV송도타임스페이스', 'CGV연수역', 'CGV인천', 'CGV인천논현', 'CGV인천도화', 'CGV인천연수', 'CGV인천학익', 'CGV주안역', 'CGV청라', 'DRIVE IN 스퀘어원'] },
  { id: 4, title: ['CGV강릉', 'CGV원주', 'CGV원통', 'CGV인제', 'CGV춘천'] },
  { id: 5, title: ['CGV논산', 'CGV당진', 'CGV대전', 'CGV대전가수원', 'CGV대전가오', 'CGV대전탄방', 'CGV대전터미널', 'CGV보령', 'CGV서산', 'CGV세종', 'CGV유성노은', 'CGV제천', 'CGV천안', 'CGV천안시청', 'CGV천안터미널', 'CGV천안펜타포트', 'CGV청주(서문)', 'CGV청주성안길', 'CGV청주율량', 'CGV청주지웰시티', 'CGV청주터미널', 'CGV충북혁신', 'CGV충주교현', 'CGV홍성'] },
  { id: 6, title: ['CGV대구수성', 'CGV대구스타디움', 'CGV대구아카데미', 'CGV대구연경', 'CGV대구월성', 'CGV대구한일', 'CGV대구현대'] },
  { id: 7, title: ['CGV대연', 'CGV동래', 'CGV부산명지', 'CGV서면', 'CGV서면삼정타워', 'CGV서면상상마당', 'CGV센텀시티', 'CGV아시아드', 'CGV울산동구', 'CGV울산삼산', 'CGV울산신천', 'CGV울산진장', 'CGV정관', 'CGV하단아트몰링', 'CGV해운대', 'CGV화명', 'CINE de CHEF 센텀'] },
  { id: 8, title: ['CGV거제', 'CGV경산', 'CGV고성', 'CGV구미', 'CGV김천율곡', 'CGV김해', 'CGV김해율하', 'CGV김해장유', 'CGV마산', 'CGV북포항', 'CGV안동', 'CGV양산삼호', 'CGV진주혁신', 'CGV창원', 'CGV창원더시티', 'CGV창원상남', 'CGV통영'] },
  { id: 9, title: ['CGV광양', 'CGV광양 엘에프스퀘어', 'CGV광주금남로', 'CGV광주상무', 'CGV광주용봉', 'CGV광주첨단', 'CGV광주충장로', 'CGV광주터미널', 'CGV광주하남', 'CGV군산', 'CGV나주', 'CGV목포', 'CGV목포평화광장', 'CGV서전주', 'CGV순천', 'CGV순천신대', 'CGV여수웅천', 'CGV익산', 'CGV전주고사', 'CGV전주에코시티', 'CGV전주효자', 'CGV정읍', 'CGV제주', 'CGV제주노형'] },
];

export default function subRegionReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    default:
      return state;
  }
}