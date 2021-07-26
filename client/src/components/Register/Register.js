import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const history = useHistory();
  const [signup, setSignup] = useState({});

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/signup', signup);
  };
  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <>
        <div className='container-r'>
          <h2>REGISTER</h2>
          <form action='' onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              placeholder='insert username'
              className='email-r'
              onChange={handleChange}
            />
            <br />
            <input
              type='text'
              placeholder='insert email'
              className='pwd-r'
              name='email'
              onChange={handleChange}
            />
            <br />
            <input
              type='text'
              name='password'
              placeholder='insert password'
              className='pwd-r'
              onChange={handleChange}
            />
          </form>
          <br />
          <button className='register' onClick={handleClick}>
            <span className='span'>Login</span>
          </button>
        </div>
      </>
    </>
  );
};

export default Register;
