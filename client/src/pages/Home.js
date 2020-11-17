import React, { useEffect, useState } from 'react';
import { getPhotos, getVideos } from '../lib/get-pexels.js';
import { useHistory } from 'react-router-dom';


const Home = () => {
  const [fotos, setFotos] = useState([]);
  const [searchString, setSearchString] = useState('');

  const [videos, setVideos] = useState([]);
  //const [searchString, setSearchString] = useState('');


  const history = useHistory()  


  const fetchAllphotos = async (tipoFoto) => {
    try {
    const photosData = await getPhotos(tipoFoto);
      setFotos(photosData);
      console.log(photosData);
    } catch {
      history.push('/error')
    }
    
  };

  const fetchAllvideos = async (tipoVideo) => {
    try {
    const videoData = await getVideos(tipoVideo);
      setVideos(videoData);
      console.log(videoData);
    } catch {
      history.push('/error')
    }
    
  };

  useEffect(() => {
    fetchAllphotos('people');
    fetchAllvideos('tigers');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchAllphotos(searchString)
  }

  const handleChange = (event) => {
    const searchItem = event.currentTarget.value.toLowerCase()
    setSearchString(searchItem)
    console.log(searchItem);
  }

  return (
    <main >
      
      <form onSubmit={handleSubmit}>
            <label className="cambio" htmlFor="search"> Search Photos</label>
        <input className="recambio" type="search"
          id="search"
          placeholder="photo to search"
          value={searchString}
          onChange={handleChange} />
         <button>submit</button>
      </form> 
      
    </main>
  );
};

export default Home;


/*
{/* {songs.map((song) => {
                            
         return(
          <article key={song.id}>  
              <h3> {song.title}</h3>
          </article>
         )
      })} }
 */


 /*
 
 photos.map((item) => (
            <article key={item.id}>
              <h2>
                {new Intl.DateTimeFormat('en-GB').format(new Date(weather.dt * 1000))}
              </h2>
              <picture>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </picture>
              <h3>Temperature</h3>
              <dl>
                <dt>Day</dt>
                <dd>{weather.feels_like.day}</dd>
                <dt>Night</dt>
                <dd>{weather.feels_like.night}</dd>
              </dl>
            </article>
          ))
 
 */


 /*intento
 <div className="page-home">
        {
          fotos
        }
      </div>
 */