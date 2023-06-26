import React, { useEffect, useState } from 'react';
import axiosInstance from 'utils/axiosInstance';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrndingMovies = async () => {
      try {
        const response = await axiosInstance.get('/trending/all/day');
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrndingMovies();
  }, []);

  return (
    <Container>
      <Title>Trending Movies</Title>
      <MovieList>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const MovieItem = styled.li`
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

export default Home;
