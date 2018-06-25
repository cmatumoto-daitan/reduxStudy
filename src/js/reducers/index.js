import TYPES from '../constants/actions-types';
// src/js/reducers/index.js
const initialState = {
  articles: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_ARTICLE: {
      return { ...state, articles: [...state.articles, action.payload] };
    }
    case TYPES.DEL_ARTICLE: {
      return { ...state, articles: [...state.articles, action.payload] };
    }
    default:
      return state;
  }
};
export default rootReducer;
