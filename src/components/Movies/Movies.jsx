import React, { useState, useEffect } from 'react';
import axiosInstance from 'utils/axiosInstance';
import styled from 'styled-components';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `/search/movie?query=${searchTerm}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchTerm) {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <Container>
      <Title>Search Movies</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
      </SearchContainer>
      <MovieList movies={searchResults}/>
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export default Movies;
