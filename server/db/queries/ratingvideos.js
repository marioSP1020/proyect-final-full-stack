import { query } from '../index.js';

const getAll = async () => {
  const ratingVideos = await query({
    tag: 'ratingVideos.get-all',
    queryString: 'SELECT * FROM ratingvideos',
  });
  return ratingVideos;
};



export default { getAll };

