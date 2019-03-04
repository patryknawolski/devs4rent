import { GET_DEVELOPERS_SUCCESS } from './actionTypes';

const initialState = [
  {
    name: 'Andrzej'
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPERS_SUCCESS:
      return { ...state, list: action.payload.data.developers };
    default:
      return state;
  }
};