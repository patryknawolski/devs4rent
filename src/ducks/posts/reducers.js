import { GET_POST_FULFILLED, GET_POSTS_FULFILLED, GET_POSTS_BY_DEVELOPER_ID_FULFILLED } from './actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_FULFILLED:
      return [...state, ...action.payload];
    case GET_POSTS_FULFILLED:
      return [...action.payload];
    case GET_POSTS_BY_DEVELOPER_ID_FULFILLED: 
      return [...action.payload];
    default:
      return state;
  }
};