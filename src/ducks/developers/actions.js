import { GET_DEVELOPER, GET_DEVELOPERS } from './actionTypes';
import client from '../contentfulClient';
import { normalizeDeveloper, normalizeDevelopers } from '../../utils/normalizer';

export const getDeveloper = id => {
  return {
    type: GET_DEVELOPER,
    payload: client.getEntry(id).then(data => normalizeDeveloper),
  };
}

export const getDevelopers = () => {
  return {
    type: GET_DEVELOPERS,
    payload: client.getEntries({
      content_type: 'developer'
    }).then(data => { return normalizeDevelopers(data.items); }),
  };
}