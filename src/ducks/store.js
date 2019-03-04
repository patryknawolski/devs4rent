import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:8080/api',
  responseType: 'json'
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(axiosMiddleware(client))));

export default store;