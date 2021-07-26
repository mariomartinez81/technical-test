import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const [signin, setSignin] = useState({});

  const handleCLick = () => {
    history.push('/register');
  };
  const handleChange = (e) => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSignin = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:3001/signin', signin);
    console.log(data);
    if (data.message === 'success') {
      history.push('/auth/github');
    }
  };
  return (
    <>
      <div className='container'>
        <h2>LOGIN</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='insert username'
            className='email'
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            name='password'
            placeholder='insert password'
            className='pwd'
            onChange={handleChange}
          />
        </form>
        <br />
        <div>
          <button className='loggin' onClick={handleCLick}>
            <span className='span-l'>register</span>
          </button>
          <button className='signin' onClick={handleSubmit}>
            <span>sign in</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
