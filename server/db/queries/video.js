import { query } from '../index.js';

const getAll = async () => {
  const videos = await query({
    tag: 'videos.get-all',
    queryString: 'SELECT * FROM videos',
  });
  return videos;
};



export default { getAll };