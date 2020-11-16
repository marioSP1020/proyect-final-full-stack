import Photos from '../db/queries/game.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getGamesBy = async (query) => {
  console.log(haveQuery(query));

  try {
    const games = await Photos.getAll();
    return games;
  } catch (error) {
    throw new Error(error);
  }
};
