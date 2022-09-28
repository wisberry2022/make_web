const GET = "GET";
const ADD = "ADD";

export const getData = () => ({ type: GET });
export const addmovieName = (name) => ({ type: ADD, name });

const initialState = [
  "공조2: 인터내셔날",
  "늑대사냥",
  "아바타 리마스터링",
  "육사오(6/45)",
  "정직한 후보2",
  "극장판 5등분의 신부",
  "극장판 엄마 까투리: 도시로 간 까투리 가족",
  "인생은 아름다워",
  "헌트",
  "프린세스 아야"
];

export default function boxofficeReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    case ADD:
      return [...state, action.name].filter((it, idx, arr) => { return arr.indexOf(it) === idx });
    default:
      return state;
  }
}