import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as contentful from 'contentful';
import rootReducer from './rootReducer';
import { loadDevelopersSuccess } from './developers/actions';

const client = contentful.createClient({
  space: 'y0qgj2b8sfqk',
  accessToken: 'bf913d1c76e4583317ca443ad067efe78fa7855bd45172f4cd6c88416e70bc53'
});

const error = err => console.log(err);

const loadContentful = () => {
  return dispatch =>
    client.getEntries({
      content_type: 'developer'
    })
      .then(({items}) => {
        dispatch(loadDevelopersSuccess(items))
      })
      .catch(error);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
store.dispatch(loadContentful());

export default store;