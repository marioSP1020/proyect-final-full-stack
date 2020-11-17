const { REACT_APP_SERVER_URL } = process.env;

export const registerUser = async (userData) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/user/register`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
};

export const getAllPhotos = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/photos`);
  const data = await response.json();
  console.log({ data });
  return data;
};

export const getAllVideos = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/videos`);
  const data = await response.json();
  console.log({ data });
  return data;
};