/** @format */

import { useState, useEffect } from 'react';
import CardMovie from './CardMovie';
import Select from './Select';
import { movies$ } from './../movies';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [choice, setChoice] = useState('');

  const allCategories = [
    'all',
    ...new Set(movies.map((item) => item.category)),
  ];
  const data = () => {
    movies$.then((movies) => {
      setMovies(movies);
    });
  };
  useEffect(() => {
    data();
  }, []);

  const deleteCard = (id) => {
    const remove = [...movies].filter((card) => card.id !== id);
    setMovies(remove);
  };

  const handleChangeChoice = (event) => {
    setChoice(event.target.value);
  };

  return (
    <>
      <h1>Number of Movies : {movies.length}</h1>
      <Select
        allCategories={allCategories}
        choice={choice}
        handleChangeChoice={handleChangeChoice}
      />
      <div className='container'>
        {movies
          .filter((movie) => {
            if (choice === 'all' || choice === '') return true;
            return movie.category === choice;
          })
          .map((elem, index) => (
            <CardMovie movie={elem} key={index} deleteCard={deleteCard} />
          ))}
      </div>
    </>
  );
};

export default MoviesList;
