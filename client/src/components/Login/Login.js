import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const [signin, setSignin] = useState({});

  const handleCLick = () => {
    history.push('/register');
  };
  const handleSignin = () => {
    history.push('/auth/github');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='container'>
        <h2>LOGIN</h2>
        <form action='' onSubmit={handleSubmit}>
          <input type='text' placeholder='insert username' className='email' />
          <br />
          <input type='text' placeholder='insert password' className='pwd' />
        </form>
        <br />
        <div>
          <button className='loggin' onClick={handleCLick}>
            <span className='span-l'>register</span>
          </button>
          <button className='signin' onClick={handleSignin}>
            <span>sign in</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
