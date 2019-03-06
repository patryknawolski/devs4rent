import { combineReducers } from 'redux';

import developersReducer from './developers/reducers';
import postsReducer from './posts/reducers';

const rootReducer = combineReducers({
  developers: developersReducer,
  posts: postsReducer,
});

export default rootReducer;