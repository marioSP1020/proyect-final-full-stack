import React, { useState } from 'react';
import { registerUser } from '../../lib/api.js';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerUser(user);
      history.push('/login');
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <main className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
          {hasError && <p>Error</p>}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input
                className="input"
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.passwordConfirmation}
              />
            </div>
          </div>
          <button className="button is-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
