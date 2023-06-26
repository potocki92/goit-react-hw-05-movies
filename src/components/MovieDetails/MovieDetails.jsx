import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axiosInstance from 'utils/axiosInstance';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <Loading>Loading...</Loading>;
  }

  const { title, overview, poster_path } = movie;

  return (
    <Container>
      <Content>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <Info>
          <Title>{title}</Title>
          <Overview>{overview}</Overview>
        </Info>
      </Content>
      <ButtonContainer>
        <StyledLink to={`cast`}>Cast</StyledLink>
        <StyledLink to={`reviews`}>Reviews</StyledLink>
        <Outlet />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Loading = styled.div`
  font-size: 20px;
  color: #010101;
`;

const Poster = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
`;

const Info = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: break-word;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #f9f9f9;
  color: #010101;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default MovieDetails;
