import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Profile.scss';

const Profile = () => {
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    async function dataRender() {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(data);
    }
    dataRender();
  }, []);

  return (
    <>
      {repos.length > 1 ? (
        <>
          <div className='profileGitHub'>
            <img
              src={repos[0].owner.avatar_url}
              alt='profile'
              className='imgProfile'
            />
            <h1>Hello {username} </h1>
          </div>

          <div className='container-repos'>
            <div className='all-repos'>
              <h2>these are your repositories</h2>
              {repos.map((repo) => (
                <div key={repo.id} className='data-repo'>
                  <div className='fav'>
                    <li>{repo.name}</li>
                    <figure
                      className='start-fav'
                      onClick={() => {
                        setFavorites([
                          ...favorites,
                          { name: repo.name, id: repo.id },
                        ]);
                      }}
                    >
                      .⭐.
                    </figure>
                  </div>
                  <br />
                </div>
              ))}
            </div>
            <div className='all-repos'>
              <h2>these are your favorities repositories:</h2>
              {favorites.length > 0 ? (
                favorites.map((repo) => (
                  <div key={repo.id} className='data-repo'>
                    <div className='fav'>
                      <li>{repo.name}</li>
                      <figure
                        className='start-fav'
                        onClick={() => {
                          setFavorites([
                            ...favorites.filter(
                              (rep) => rep.name !== repo.name
                            ),
                          ]);
                        }}
                      >
                        .❌.
                      </figure>
                    </div>
                    <br />
                  </div>
                ))
              ) : (
                <div className='await-add'>
                  <h3>Add your favorites repos ⭐</h3>
                  <img
                    src='https://cdn.dribbble.com/users/159078/screenshots/3018147/output_07opxg.gif'
                    alt='add-fav'
                    className='img-add'
                  />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
};

export default Profile;
