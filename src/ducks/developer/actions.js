import { GET_DEVELOPER } from './actionTypes';
import client from '../contentfulClient';
import { normalizeDeveloper } from '../../utils/normalizer';

export const getDeveloper = id => {
  return {
    type: GET_DEVELOPER,
    payload: client.getEntry(id).then(normalizeDeveloper),
  };
}