import { combineReducers } from 'redux';

import developersReducer from './developers/reducers';

const rootReducer = combineReducers({
  developers: developersReducer,
});

export default rootReducer;