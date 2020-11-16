import { query } from '../index.js';

const getAll = async () => {
  const ratingPhotos = await query({
    tag: 'ratingPhotos.get-all',
    queryString: 'SELECT * FROM ratingphotos',
  });
  return ratingPhotos;
};



export default { getAll };
