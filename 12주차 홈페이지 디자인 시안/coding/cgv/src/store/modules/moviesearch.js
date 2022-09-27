const UPDATE = 'UPDATE';
const INITIALIZE = 'INITIALIZE';

export const updateData = (data) => ({ type: UPDATE, data });
export const initializeData = () => ({ type: INITIALIZE });

const initialState = [];

export default function movieSearchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return action.data.map((it, idx) => (
        {
          id: idx,
          title: it.title.replace(/<[^>]*>?/g, ''),
          director: it.director.split('|')[0],
          actor: it.actor.split('|'),
          pubDate: it.pubDate,
          rating: it.userRating,
          image: it.image,
        }
      ))
    default:
      return state;
  }
}
