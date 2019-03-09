import { GET_POSTS, GET_POSTS_BY_DEVELOPER_ID, GET_POST } from './actionTypes';
import client from '../contentfulClient';
import { normalizePosts } from '../../utils/normalizer';

export const getPosts = () => {
  return {
    type: GET_POSTS,
    payload: client.getEntries({
      content_type: 'post',
      include: 2
    }).then(data => normalizePosts(data.items)),
  };
}

export const getPostsByDeveloperId = id => {
  return {
    type: GET_POSTS_BY_DEVELOPER_ID,
    payload: client.getEntries({
      content_type: 'post',
      include: 2,
      'fields.author.sys.id': id,
    }).then(data => normalizePosts(data.items)),
  }; 
}

export const getPost = id => {
  return {
    type: GET_POST,
    payload: client.getEntries({
      'sys.id': id,
      include: 2
    }).then(data => normalizePosts(data.items)),
  };
}