import { getVideosBy } from '../models/video.js';

export const listVideos = async (request, response) => {
  const { query } = request;

  try {
    const videos = await getVideosBy(query);  
    return response.status(200).send(videos);
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





