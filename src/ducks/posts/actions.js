import { GET_POSTS, GET_POSTS_BY_DEVELOPER_ID } from './actionTypes';
import client from '../contentfulClient';
import { normalizePosts } from '../../utils/normalizer';

export const getPosts = () => {
  return {
    type: GET_POSTS,
    payload: client.getEntries({
      content_type: 'post',
      include: 2
    }).then(data => { return normalizePosts(data.items); }),
  };
}

export const getPostsByDeveloperId = id => {
  return {
    type: GET_POSTS_BY_DEVELOPER_ID,
    payload: client.getEntries({
      content_type: 'post',
      include: 2,
      'sys.id': '425ZE2d2G0sD4hIp3QU5Ws',
    }).then(data => { return normalizePosts(data.items); }),
  }; 
}