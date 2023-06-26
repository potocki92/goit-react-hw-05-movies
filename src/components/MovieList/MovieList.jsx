import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';
import styled from 'styled-components';

const MovieList = ({ movies }) => {
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MovieListStyled>
  );
};

const MovieListStyled = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export default MovieList;
