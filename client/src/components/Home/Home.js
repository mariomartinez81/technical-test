import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    async function github() {
      const response = await axios.get(
        `http://localhost:3001/auth/github/callback`
      );
      return <response></response>;
    }
    github();
  }, []);
  return (
    <>
      <a
        href='http://localhost:3001/auth/github'
        target='_blank'
        rel='noreferrer'
      >
        Github
      </a>
    </>
  );
};

export default Home;
