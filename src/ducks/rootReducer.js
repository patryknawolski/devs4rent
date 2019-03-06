import { combineReducers } from 'redux';

import developerReducer from './developer/reducers';
import developersReducer from './developers/reducers';

const rootReducer = combineReducers({
  developer: developerReducer,
  developers: developersReducer,
});

export default rootReducer;