const setToken = (token) => localStorage.setItem('token', token);

const getToken = () => localStorage.getItem('token');

const removeToken = () => localStorage.removeItem('token');

const getPayload = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  const parts = token.split('.');
  if (parts.length < 3) return false;
  try {
    return JSON.parse(atob(parts[1]));
  } catch {
    return false;
  }
};

const isAuthenticated = () => {
  const payload = getPayload();
  if (!payload) {
    return false;
  }
  const now = Math.floor(Date.now() / 1000);
  return now < payload.exp;
};

const Auth = {
  setToken,
  getToken,
  removeToken,
  getPayload,
  isAuthenticated,
};

export default Auth;
