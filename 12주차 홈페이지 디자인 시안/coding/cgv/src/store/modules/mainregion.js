const GET = 'GET';

export const getData = () => ({ type: GET });

const initialState = [
  { id: 1, title: '서울' },
  { id: 2, title: '경기' },
  { id: 3, title: '인천' },
  { id: 4, title: '강원' },
  { id: 5, title: '대전/충청' },
  { id: 6, title: '대구' },
  { id: 7, title: '부산/울산' },
  { id: 8, title: '경상' },
  { id: 9, title: '광주/전라/제주' },
];

export default function mainRegionReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    default:
      return state;
  }
}