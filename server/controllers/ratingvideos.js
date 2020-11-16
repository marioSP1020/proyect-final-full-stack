import { getRatingVideosBy } from '../models/ratingvideos.js';

export const listRatingVideos = async (request, response) => {
  const { query } = request;

  try {
    const ratingVideos = await getRatingVideosBy(query);
    return response.status(200).send(ratingVideos);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

// export const createGame = async (request, response) => {
//   const { headers } = request;

//   console.log({ headers });

//   return response.send({
//     message: 'game create',
//   });
// };





