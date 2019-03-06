import { GET_DEVELOPER_FULFILLED, GET_DEVELOPERS_FULFILLED } from './actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPER_FULFILLED:
      return [...state, action.payload];
    case GET_DEVELOPERS_FULFILLED: {
      return [...action.payload];
    }
    default:
      return state;
  }
};