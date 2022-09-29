const GET = 'GET';

export const getData = () => ({ GET: 'GET' });

const initialState = [
  {
    id: 1,
    name: 'VIP가 쏘는 영화 쿠폰팩!',
    date: '2022.09.07 ~ 2022.09.25',
    application: 'CGV 홈페이지 신청',
    present: 'CGV 영화관람권 2장',
    result: '09/26(월) 당첨자발표 게시판 고지',
    plan: '09/26(월) 당첨자 자택 발송'
  },
  {
    id: 2,
    name: '그 때 그 커피 전격 론칭!',
    date: '2022.09.05 ~ 2022.09.24',
    application: 'CGV 홈페이지 신청',
    present: '그 때 그 커피 할인쿠폰',
    result: '09/25(일) CGV 게시판 고지',
    plan: '09/25(일) 전자쿠폰 일괄 지급'
  },
  {
    id: 3,
    name: '해리포터 생일케이크 쿠션 출시',
    date: '2022.09.01 ~ 2022.09.11',
    application: '전국 CGV 매장 매표소',
    present: '해리포터 쿠션',
    result: '현장 지급',
    plan: '현장 지급'
  },
  {
    id: 4,
    name: 'CGV X 트라이비 제휴 이벤트',
    date: '2022.08.30 ~ 2022.09.12',
    application: 'CGV 홈페이지 신청',
    present: '트라이비 신규앨범',
    result: '09/13(화) 당첨자 개별 공지',
    plan: '09/13(화) 당첨자 자택 배송'
  },
  {
    id: 5,
    name: '짜파게티팝콘 론칭!',
    date: '2022.08.27 ~ 2022.09.02',
    application: '전국 CGV 매장 매표소',
    present: '짜파게티 팝콘세트(M)',
    result: '현장 지급',
    plan: '현장 지급'
  },
  {
    id: 6,
    name: '[CGV VIP] 예매 오픈 알림 서비스',
    date: 'CGV SVIP 등급 유지기간',
    application: 'CGV 모바일 홈페이지',
    present: 'CGV 예매 오픈 알림',
    result: '신청 시 즉시 등록',
    plan: '신청 시 즉시 등록'
  },
  {
    id: 7,
    name: 'CGV NFT Wallte을 만들어 보세요!',
    date: '2022.08.13 ~ 2022.08.25',
    application: 'CGV 홈페이지 신청',
    present: 'CGV NFT 굿즈',
    result: '신청 시 즉시 수령',
    plan: '신청 시 즉시 수령'
  },
  {
    id: 8,
    name: 'IMAX Amzaing Race',
    date: '2022.08.02 ~ 2022.08.14',
    application: '전국 CGV IMAX 극장 매표소',
    present: 'IMAX 컬렉션북',
    result: '현장 수령',
    plan: '현장 수령'
  }
];

export default function lastEventReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    default:
      return state;
  }
}