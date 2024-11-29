import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovie";
import { MovieItem } from "../components/Movie/MovieItem";
import { Loading } from "../components/Loading/loading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  HomeContainer,
  HeroSection,
  TitleContainer,
  Title,
  BackgroundImage,
  ContentSection,
  Category,
  CategoryTitle,
  StyledSlider,
} from "./Styles/home.styles";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const popularMovies = useMovies();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setMovies(popularMovies);
      setIsLoading(false);
    }, 2000);
  }, [popularMovies]);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (isLoading) {
    return <Loading message="Carregando os melhores filmes para você!" />;
  }

  return (
    <HomeContainer>
      <HeroSection>
        <TitleContainer>
          <Title>Moon Movies</Title>
        </TitleContainer>
        <BackgroundImage />
      </HeroSection>
      <ContentSection>
        <Category>
          <CategoryTitle>FILMES</CategoryTitle>
          <StyledSlider {...sliderSettings}>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </StyledSlider>
        </Category>
        <Category>
          <CategoryTitle>TOP 10</CategoryTitle>
          <StyledSlider {...sliderSettings}>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </StyledSlider>
        </Category>
      </ContentSection>
    </HomeContainer>
  );
}
