import { GET_POSTS } from './actionTypes';
import client from '../contentfulClient';
import { normalizePosts } from '../../utils/normalizer';

export const getPosts = () => {
  return {
    type: GET_POSTS,
    payload: client.getEntries({
      content_type: 'post',
      include: 10
    }).then(data => { return normalizePosts(data.items); }),
  };
}