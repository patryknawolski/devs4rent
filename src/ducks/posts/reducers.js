import { GET_POSTS_FULFILLED } from './actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_FULFILLED: {
      return [...action.payload];
    }
    default:
      return state;
  }
};