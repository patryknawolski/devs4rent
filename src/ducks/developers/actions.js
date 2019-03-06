import { GET_DEVELOPERS } from './actionTypes';
import client from '../contentfulClient';
import { normalizeDevelopers } from '../../utils/normalizer';

export const getDevelopers = () => {
  return {
    type: GET_DEVELOPERS,
    payload: client.getEntries({
      content_type: 'developer'
    }).then(data => { return normalizeDevelopers(data.items); }),
  };
}