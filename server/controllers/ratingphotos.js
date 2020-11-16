import { getRatingPhotosBy } from '../models/ratingphotos.js';

export const listRatingPhotos = async (request, response) => {
  const { query } = request;

  try {
    const ratingPhotos = await getRatingPhotosBy(query);
    return response.status(200).send(ratingPhotos);
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





