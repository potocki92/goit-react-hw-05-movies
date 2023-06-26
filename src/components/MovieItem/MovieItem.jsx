import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieItem = ({ movie }) => (
  <MovieItemContainer>
    <MovieLink to={`/movies/${movie.id}`}>
      <Poster
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </MovieLink>
  </MovieItemContainer>
);

const MovieItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const MovieTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

export default MovieItem;
