import RatingPhotos from '../db/queries/ratingphotos.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getRatingPhotosBy = async (query) => {
  console.log(haveQuery(query));

  try {
    const ratingPhotos = await RatingPhotos.getAll();
    return ratingPhotos;
  } catch (error) {
    throw new Error(error);
  }
};
