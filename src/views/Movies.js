import {
  MoviesContainer,
  Title,
  MoviesList,
  StyledMovieItem,
} from "./Styles/movies.styles";
import { MovieItem } from "../components/MovieItem";
import { useMovies } from "../hooks/useMovie";

export function Movies() {
  const movies = useMovies();

  return (
    <MoviesContainer>
      <Title>NEWS</Title>
      <MoviesList>
        {movies.map((movie) => (
          <StyledMovieItem key={movie.id}>
            <MovieItem movie={movie} />
          </StyledMovieItem>
        ))}
      </MoviesList>
    </MoviesContainer>
  );
}
