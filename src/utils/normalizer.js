export const normalizePhoto = ({
  fields: {
    title,
    file: { url },
  },
  sys: { id },
}) => ({
  id,
  title,
  url,
});

export const normalizeTechnology = ({
  sys: { id },
  fields: { name },
}) => ({
  id,
  name,
});

export const normalizeTechnologies = technologies => technologies.map(normalizeTechnology);

export const normalizeDeveloper = ({
  sys: { id },
  fields: {
    name,
    level,
    photo,
    technologies,
    type,
  },
}) => ({
  id,
  name,
  level,
  photo: normalizePhoto(photo),
  technologies: normalizeTechnologies(technologies),
  type,
});

export const normalizeDevelopers = developers => developers.map(normalizeDeveloper);

export const normalizePost = ({
  sys: { id, updatedAt },
  fields: {
    author,
    title,
    content,
  },
}) => {
  return ({
    id,
    author: normalizeDeveloper(author),
    title,
    content,
    updatedAt
  })
};

export const normalizePosts = posts => posts.map(normalizePost);