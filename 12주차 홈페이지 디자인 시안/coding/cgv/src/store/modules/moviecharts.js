const ADD_DATA = 'ADD_DATA';
const DELETE_DATA = 'DELETE_DATA';

export const addData = (title, image) => ({ type: ADD_DATA, title, image });
export const deleteData = () => ({ type: DELETE_DATA });

const movieData = {
  new: {
    title: '',
    image: '',
  },
  data: []
}

export default function movieReducer(state = movieData, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state.new,
        data: [...state.data, { title: action.title, image: action.image }]
      }
    case DELETE_DATA:
      return {
        new: {
          title: '',
          image: '',
        },
        data: []
      };
    default:
      return state;
  }
}