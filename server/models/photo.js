import Photos from '../db/queries/photo.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getPhotosBy = async (query) => {
  console.log(haveQuery(query));

  try {
    const photos = await Photos.getAll();
    return photos;
  } catch (error) {
    throw new Error(error);
  }
};
