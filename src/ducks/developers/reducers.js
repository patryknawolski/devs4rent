import { GET_DEVELOPERS_FULFILLED } from './actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPERS_FULFILLED: {
      return [...action.payload];
    }
    default:
      return state;
  }
};