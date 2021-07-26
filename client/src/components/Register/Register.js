import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const history = useHistory();
  const [signin, setSignin] = useState({});

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <>
        <div className='container-r'>
          <h2>REGISTER</h2>
          <form action=''>
            <input
              type='text'
              placeholder='insert username'
              className='email-r'
            />
            <br />
            <input type='text' placeholder='insert email' className='pwd-r' />
            <br />
            <input
              type='text'
              placeholder='insert password'
              className='pwd-r'
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
