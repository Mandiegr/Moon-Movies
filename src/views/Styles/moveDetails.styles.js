import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  color: white;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;
  }
`;

export const Poster = styled.img`
  width: 90%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Overview = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #d1d1d1;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
