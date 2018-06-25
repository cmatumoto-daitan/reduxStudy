import TYPES from '../constants/actions-types';
// src/js/actions/index.js
const addArticle = article => ({ type: TYPES.ADD_ARTICLE, payload: article });
const delArticle = article => ({ type: TYPES.DEL_ARTICLE, payload: article });
export default { addArticle, delArticle };
