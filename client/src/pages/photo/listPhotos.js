import React, { useEffect, useState } from 'react';
import { getAllPhotos } from '../../lib/api.js';
import PhotoItem from '../../components/photos/itemPhoto.js';

//function App() {
const ListPhotos = () => {
  const [data, setData] = useState([]);

  const fetchAllPhotos = async () => {
    const dataAll = await getAllPhotos();
    setData(dataAll);
    console.log(dataAll);
  };

  useEffect(() => {
    fetchAllPhotos();
  }, []);

  return (
    <main className="PageList">
        <h1>Photographs</h1>
        <div className="photos">
          {data.map((item) => (
            <PhotoItem photoData={ item } key={ item.photos_id } view="list"/>
          ))}
        </div>
    </main>   
  );
};

export default ListPhotos;
