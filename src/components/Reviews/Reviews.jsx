import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from 'utils/axiosInstance';
import styled from 'styled-components';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <Container>
      <Title>Reviews</Title>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <Author>{review.author}</Author>
            <Content>{review.content}</Content>
          </ReviewItem>
        ))}
      </ReviewList>
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

const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReviewItem = styled.li`
  margin-bottom: 20px;
`;

const Author = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Content = styled.p`
  font-size: 16px;
`;

export default Reviews;
