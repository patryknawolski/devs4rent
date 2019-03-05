import * as contentful from 'contentful';
import { GET_DEVELOPERS } from './actionTypes';

const client = contentful.createClient({
  space: 'y0qgj2b8sfqk',
  accessToken: 'bf913d1c76e4583317ca443ad067efe78fa7855bd45172f4cd6c88416e70bc53'
});

export const getDevelopers = () => {
  return {
    type: GET_DEVELOPERS,
    payload: client.getEntries({
      content_type: 'developer'
    }).then(data => data.items),
  };
}