import { query } from '../index.js';

const getAll = async () => {
  const photos = await query({
    tag: 'photos.get-all',
    queryString: 'SELECT * FROM photos',
  });
  return photos;
};



export default { getAll };
