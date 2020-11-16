import { getPhotosBy } from '../models/photo.js';

export const listPhotos = async (request, response) => {
  const { query } = request;

  try {
    const photos = await getPhotosBy(query);
    return response.status(200).send(photos);
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





