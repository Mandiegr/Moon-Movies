import React, { useEffect, useState } from "react";
import { useGenres } from "../hooks/useGenres";
import {
    Container,
    GenresSection,
    GenresList,
    GenreItem,
    GenreLink,
    ItemsContainer,
    BackButton,
    CategoryTitle,
    CategoryList,
    CategoryItem,
    CategoryLink,
} from "./Styles/genres.styles";

export default function Genres() {
    const {
        movieGenres,
        tvGenres,
        fetchMoviesByGenre,
        fetchSeriesByGenre,
        moviesByGenre,
        seriesByGenre,
    } = useGenres();

    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (selectedGenre) {
            if (selectedType === "movie") {
                fetchMoviesByGenre(selectedGenre);
            } else if (selectedType === "tv") {
                fetchSeriesByGenre(selectedGenre);
            }
        }
    }, [selectedGenre, selectedType, fetchMoviesByGenre, fetchSeriesByGenre]);

    useEffect(() => {
        if (selectedType === "movie" && moviesByGenre.length > 0) {
            setItems(moviesByGenre);
        } else if (selectedType === "tv" && seriesByGenre.length > 0) {
            setItems(seriesByGenre);
        }
    }, [selectedType, moviesByGenre, seriesByGenre]);

    return (
        <Container>
            {selectedGenre === null ? (
                <>
                    <GenresSection>
                        <CategoryTitle>Gêneros de Filmes</CategoryTitle>
                        <GenresList>
                            {movieGenres.map((genre) => (
                                <GenreItem key={genre.id}>
                                    <GenreLink
                                        onClick={() => {
                                            setSelectedGenre(genre.id);
                                            setSelectedType("movie");
                                        }}
                                    >
                                        {genre.name}
                                    </GenreLink>
                                </GenreItem>
                            ))}
                        </GenresList>
                    </GenresSection>

                    <GenresSection>
                        <CategoryTitle>Gêneros de Séries</CategoryTitle>
                        <GenresList>
                            {tvGenres.map((genre) => (
                                <GenreItem key={genre.id}>
                                    <GenreLink
                                        onClick={() => {
                                            setSelectedGenre(genre.id);
                                            setSelectedType("tv");
                                        }}
                                    >
                                        {genre.name}
                                    </GenreLink>
                                </GenreItem>
                            ))}
                        </GenresList>
                    </GenresSection>
                </>
            ) : (
                <ItemsContainer>
                    <BackButton
                        onClick={() => {
                            setSelectedGenre(null);
                            setSelectedType(null);
                            setItems([]);
                        }}
                    >
                        X
                    </BackButton>
                    <CategoryTitle>
                        {selectedType === "movie" ? "Filmes" : "Séries"}:{" "}
                        {selectedType === "movie"
                            ? movieGenres.find((genre) => genre.id === selectedGenre)?.name
                            : tvGenres.find((genre) => genre.id === selectedGenre)?.name}
                    </CategoryTitle>
                    <CategoryList>
                        {items.map((item) => (
                            <CategoryItem key={item.id}>
                                <CategoryLink>
                                    {selectedType === "movie" ? item.title : item.name}
                                </CategoryLink>
                            </CategoryItem>
                        ))}
                    </CategoryList>
                </ItemsContainer>
            )}
        </Container>
    );
}
