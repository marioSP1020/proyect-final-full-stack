import RatingVideos from '../db/queries/ratingvideos.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getRatingVideosBy = async (query) => {
  console.log(haveQuery(query));

  try {
    const ratingVideos = await RatingVideos.getAll();
    return ratingVideos;
  } catch (error) {
    throw new Error(error);
  }
};
