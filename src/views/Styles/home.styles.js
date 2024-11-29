import styled from "styled-components";
import Slider from "react-slick";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #00072d;
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 900px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  background: transparent;
  border-radius: 10px;
`;

export const Title = styled.span`
  font-size: 64px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Racing Sans One", sans-serif;
  text-shadow: 0 2px 10px rgba(0, 255, 255, 0.5), rgba(0, 0, 0, 0.8);

  animation: subtleGlow 3s infinite alternate;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @keyframes subtleGlow {
    from {
      text-shadow: 0 2px 10px rgba(109, 35, 182, 0.5);
    }
    to {
      text-shadow: 0 4px 15px rgba(109, 35, 182, 0.7);
    }
  }
`;

export const BackgroundImage = styled.div`
  background-image: url("https://image.cdn2.seaart.me/2024-11-27/ct38l6te878c739dmp3g-2/89c036c49fbff9ff95947035ade390ff_high.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const ContentSection = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Category = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const CategoryTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .slick-list {
    margin: 0;
  }
`;
