import React, { useEffect, useState } from 'react';
import { getAllVideos } from '../../lib/api.js';
import VideoItem from '../../components/videos/itemVideo.js';

//function App() {
const ListVideos = () => {
  const [data, setData] = useState([]);

  const fetchAllVideos = async () => {
    const dataAll = await getAllVideos();
    setData(dataAll);
    console.log(dataAll);
  };

  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <main className="PageList">
        <h1>Videos</h1>
        <div className="videos">
          {data.map((item) => (
            <VideoItem videoData={ item } key={ item.videos_id } view="list"/>
          ))}
        </div>
    </main>   
  );
};

export default ListVideos;
