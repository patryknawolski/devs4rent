import { GET_DEVELOPERS } from './actionTypes';
import client from '../contentfulClient';

export const getDevelopers = () => {
  return {
    type: GET_DEVELOPERS,
    payload: client.getEntries({
      content_type: 'developer'
    }).then(data => data.items),
  };
}