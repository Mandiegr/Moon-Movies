import { Link } from "react-router-dom";
import { MovieWrapper, DetailsButton } from "./movieitem.styles";

export function MovieItem({ movie }) {
    return (
        <MovieWrapper>
            {movie.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                  alt={movie.title} 
                  style={{ width: '100%', borderRadius: '5px 5px 0 0' }} // Fazendo a imagem ocupar toda a largura
                />
            )}
            <h3>{movie.title}</h3>
            <p>
                <DetailsButton as={Link} to={`/movies/${movie.id}`}>Ver Detalhes</DetailsButton>
            </p>
        </MovieWrapper>
    );
}
