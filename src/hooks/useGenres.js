
import { useState, useEffect } from "react";
import { getMovieGenres, getTVGenres, getMoviesByGenre, getTVShowsByGenre } from "../services/movies.services";

export function useGenres() {
    const [movieGenres, setMovieGenres] = useState([]);
    const [tvGenres, setTVGenres] = useState([]);
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [tvShowsByGenre, setTVShowsByGenre] = useState([]);

    useEffect(() => {
        getMovieGenres().then(({ data }) => {
            setMovieGenres(data.genres);
        });

        getTVGenres().then(({ data }) => {
            setTVGenres(data.genres);
        });
    }, []);


    const fetchMoviesByGenre = (genreId) => {
        getMoviesByGenre(genreId).then(({ data }) => {
            setMoviesByGenre(data.results);
        });
    };


    const fetchTVShowsByGenre = (genreId) => {
        getTVShowsByGenre(genreId).then(({ data }) => {
            setTVShowsByGenre(data.results);
        });
    };

    return {
        movieGenres,
        tvGenres,
        fetchMoviesByGenre,
        fetchTVShowsByGenre,
        moviesByGenre,
        tvShowsByGenre,
    };
}
