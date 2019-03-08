import { shape, string, arrayOf } from 'prop-types';

export const technologyType = shape({
  id: string.isRequired,
  name: string.isRequired,
});

export const developerType = shape({
  id: string.isRequired,
  name: string.isRequired,
  level: string.isRequired,
  photo: shape({
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired, 
  }),
  technologies: arrayOf(technologyType),
  type: string.isRequired,
});

export const developersType = arrayOf(developerType);

export const postType = shape({
  id: string.isRequired,
  author: developerType,
  title: string.isRequired,
  content: string.isRequired,
  updatedAt: string.isRequired,
});

export const postsType = arrayOf(postType);