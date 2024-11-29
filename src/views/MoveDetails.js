import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import {
  DetailsContainer,
  Poster,
  Content,
  Title,
  Overview,
} from "./Styles/moveDetails.styles";

export function MovieDetails() {
  const { id } = useParams();
  const movie = useMovie(id);

  return (
    <DetailsContainer>
      {movie.poster_path && (
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <Content>
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
      </Content>
    </DetailsContainer>
  );
}
