import { combineReducers } from 'redux';

import developerReducer from './developer/reducers';
import developersReducer from './developers/reducers';
import postsReducer from './posts/reducers';

const rootReducer = combineReducers({
  developer: developerReducer,
  developers: developersReducer,
  posts: postsReducer,
});

export default rootReducer;