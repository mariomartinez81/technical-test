import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/signup', signup);
      console.log(res);
      history.push('/');
      alert('Successful  register');
    } catch (error) {
      console.log(error);
      if (!signup.username || !signup.email || !signup.password)
        return alert('compleate all fields');
      if (error) alert('The user exist');
    }
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
              type='password'
              name='password'
              placeholder='insert password'
              className='pwd-r'
              onChange={handleChange}
            />
          </form>
          <br />
          <button className='register' onClick={handleSubmit}>
            <span className='span'>Login</span>
          </button>
        </div>
      </>
    </>
  );
};

export default Register;
