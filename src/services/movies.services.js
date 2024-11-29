import { moviesApi } from "../config/http";

export function getPopularMovies() {
    return moviesApi.get("movie/popular");
}

export function getMovie(movieId) {
    return moviesApi.get(`movie/${movieId}`)
}

export function getMovieGenres() {
    return moviesApi.get("genre/movie/list");
}

export function getTVGenres() {
    return moviesApi.get("genre/tv/list");
}

export function getMoviesByGenre(genreId) {
    return moviesApi.get(`discover/movie?with_genres=${genreId}`);
}

export function getTVShowsByGenre(genreId) {
    return moviesApi.get(`discover/tv?with_genres=${genreId}`);
}