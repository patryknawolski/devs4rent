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