/** @format */

import React, { useState } from 'react';
import { FcLike, FcDislike } from 'react-icons/fc';

const CardMovie = ({ movie, deleteCard }) => {
  const [likes, setLikes] = useState(movie.likes);
  const [dislikes, setDislikes] = useState(movie.dislikes);

  const pourcentageLikes = (movie.likes / (movie.likes + movie.dislikes)) * 100;
  const pourcentagedislikes =
    (movie.dislikes / (movie.likes + movie.dislikes)) * 100;
  const addLikes = () => {
    if (likes > movie.likes) {
      return setLikes(likes - 1);
    }
    setLikes(movie.likes + 1);
  };
  const addDislikes = () => {
    if (dislikes < movie.dislikes) {
      return setDislikes(dislikes + 1);
    }
    setDislikes(movie.dislikes - 1);
  };
  return (
    <div className='card'>
      <div className='title'>{movie.title}</div>
      <div className='resume'>
        <div className='pourcentageLikes'>
          likes : {pourcentageLikes.toFixed(1)}%
        </div>
        <div className='pourcentageDislikes'>
          dislikes: {pourcentagedislikes.toFixed(1)}%
        </div>
      </div>
      <div className='jauge'>
        <div className='likes' style={{ width: `${pourcentageLikes}%` }}></div>
        <div
          className='dislikes'
          style={{ width: `${pourcentagedislikes}%` }}></div>
      </div>
      <div className='toggle'>
        <div className='fcLike'>
          <FcLike className='addLikes' onClick={addLikes} />
          <div className='nbLikes'>{likes}</div>
        </div>
        <div className='fcDislikes'>
          <FcDislike className={addDislikes} onClick={addDislikes} />
          <div className='nbDislikes'>{dislikes}</div>
        </div>
      </div>
      <div className='bottom'>
        <div className='category'>{movie.category}</div>
        <div className='remove' onClick={() => deleteCard(movie.id)}>
          X
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
