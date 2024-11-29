import styled from "styled-components";

export const MoviesContainer = styled.section`
  width: 96%;
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledMovieItem = styled.div`
  width: 200px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
