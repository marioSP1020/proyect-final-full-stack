import Videos from '../db/queries/video.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getVideosBy = async (query) => {
  console.log(haveQuery(query));

  try {
    const videos = await Videos.getAll();
    return videos;
  } catch (error) {
    throw new Error(error);
  }
};
