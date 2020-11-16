import Photos from '../db/queries/photo.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getPhotosBy = async (query) => {
  console.log(haveQuery(query));

  try {
    const games = await Photos.getAll();
    return games;
  } catch (error) {
    throw new Error(error);
  }
};
