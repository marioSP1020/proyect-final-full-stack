const BASE_URL = 'https://api.pexels.com/v1/search';
const BASE_URL_VIDEOS = 'https://api.pexels.com/videos/search';


//www.songsterr.com/a/ra/songs.json?pattern=Marley
export const getPhotos = async (query) => {
  const response = await fetch(`${BASE_URL}?query=${query}`, {  //query-curated
    method: 'GET',
    headers: {
      'Authorization': '563492ad6f91700001000001128585c7032d43debc5af7d8315230e5'
    }
  });
  const data = await response.json();
  return data;
  
};

export const getVideos = async (query) => {
  const response = await fetch(`${BASE_URL_VIDEOS}?query=${query}`, {  //query-curated
    method: 'GET',
    headers: {
      'Authorization': '563492ad6f91700001000001128585c7032d43debc5af7d8315230e5'
    }
  });
  const data = await response.json();
  return data;
  
};


/*

const BASE_URL = 'https://www.songsterr.com/a/ra/songs.json';

//www.songsterr.com/a/ra/songs.json?pattern=Marley
export const getSongs = async (query) => {
  const response = await fetch(`${BASE_URL}?pattern=${query}`);
  const data = await response.json();
  return data;
  
};

*/
/*
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response)); */