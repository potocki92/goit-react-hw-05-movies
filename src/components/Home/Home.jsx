import React, { useEffect, useState } from 'react';
import axiosInstance from 'utils/axiosInstance';
import styled from 'styled-components';
import MovieList from 'components/MovieList/MovieList';

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
      <MovieList movies={movies} />
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

export default Home;
