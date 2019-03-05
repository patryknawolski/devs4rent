import { GET_DEVELOPERS_SUCCESS } from './actionTypes';

const initialState = [
  {
    name: 'Andrzej'
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPERS_SUCCESS: {
      const { developers } = action;
      return [...developers];
    }
    default:
      return state;
  }
};