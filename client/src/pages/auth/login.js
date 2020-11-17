import React, { useState } from 'react';
import { loginUser } from '../../lib/api.js';
import Auth from '../../lib/auth.js';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = await loginUser(user);
    Auth.setToken(token);
    history.push('/videogames');
  };

  return (
    <main className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="button is-info">Log In</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
