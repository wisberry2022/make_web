const GET = 'GET';

export const getData = () => ({ GET: 'GET' });

const initialState = [
  {
    id: 1,
    name: '영스엑 글로벌 최장 스크린 기록 도전!',
    date: '2022.09.22 ~ 2022.10.05',
    application: '응원하기 버튼 클릭',
    present: '스프라이트(M) 쿠폰 1매',
    result: '10/11(화) 당첨자발표 게시판 고지',
    plan: '10/11(화) 전자쿠폰 일괄 지급'
  },
  {
    id: 2,
    name: '개봉작 사용설명서',
    date: '2022.09.22 ~ 2022.10.07',
    application: '응원하기 버튼 클릭',
    present: '치즈팝콘(M) 쿠폰 1매',
    result: '10/08(토) CGV 게시판 고지',
    plan: '10/08(토) 전자쿠폰 일괄 지급'
  },
  {
    id: 3,
    name: '[인생은 아름다워] 필름마크',
    date: '2022.09.25 ~ 2022.10.11',
    application: '이벤트 영화 관람 후 매표소에서 티켓 제시',
    present: '<인생은 아름다워> 필름마크',
    result: '현장 지급',
    plan: '현장 지급'
  },
  {
    id: 4,
    name: '[정직한 후보2] 필름마크',
    date: '2022.09.27 ~ 2022.10.11',
    application: '이벤트 영화 관람 후 매표소에서 티켓 제시',
    present: '<정직한 후보2> 필름마크',
    result: '현장 지급',
    plan: '현장 지급'
  },
  {
    id: 5,
    name: '[이달의 아이스콘] 10월 라인업 미리 만나보기',
    date: '2022.09.27 ~ 2022.10.01',
    application: 'CGV 공식 홈페이지 응모',
    present: '10월 개봉작품 사전 시사회 티켓 2장',
    result: '10/03(월) CGV 게시판 고지',
    plan: '10/03(월) 모바일 티켓 일괄 지급'
  },
  {
    id: 6,
    name: '[4DX 문유] 사전 시사 이벤트',
    date: '2022.09.28 ~ 2022.10.14',
    application: 'CGV 공식 홈페이지 응모',
    present: '[4DX 문유] 사전 시사회 티켓 2장',
    result: '10/15(토) 당첨자발표 게시판 고지',
    plan: '10/15(토) 모바일 티켓 일괄 지급'
  },
  {
    id: 7,
    name: '[극장판 헬로카봇] 파워크루즈 스탬프컵 론칭!',
    date: '2022.10.03 ~ 2022.10.10',
    application: '전국 CGV 극장의 매점',
    present: '팝콘세트 + 헬로 카봇 파워크루즈 스탬프컵 ',
    result: '현장 지급',
    plan: '현장 지급'
  },
  {
    id: 8,
    name: '[늑대사냥] 필름마크',
    date: '2022.10.10 ~ 2022.10.24',
    application: '이벤트 영화 관람 후 매표소에서 티켓 제시',
    present: '<늑대사냥> 필름마크',
    result: '현장 지급',
    plan: '현장 지급'
  },
  {
    id: 9,
    name: '[아바타 리마스터링] 필름마크',
    date: '2022.10.11 ~ 2022.10.29',
    application: '이벤트 영화 관람 후 매표소에서 티켓 제시',
    present: '<아바타 리마스터링> 필름마크',
    result: '현장 지급',
    plan: '현장 지급'
  },
];

export default function currentEventReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    default:
      return state;
  }
}