import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from 'utils/axiosInstance';
import styled from 'styled-components';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${movieId}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <Container>
      <Title>Cast</Title>
      <CastList>
        {cast.map((actor) => (
          <Actor key={actor.id}>
            <ActorImage
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
          </Actor>
        ))}
      </CastList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Actor = styled.li`
  width: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ActorImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ActorName = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
`;

export default Cast;
