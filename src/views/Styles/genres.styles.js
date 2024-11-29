import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: 100vh;
    color: white;

    @media (max-width: 600px) {
        padding: 15px;
        gap: 20px;
    }
`;

export const GenresSection = styled.div`
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`;

export const GenresList = styled.ul`
    list-style: none;
    padding: 0;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
`;

export const GenreItem = styled.li`
    font-size: 18px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    border-left: 4px solid transparent;
    padding: 8px 12px;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
        border-color: #6d23b6;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        padding: 6px 10px;
    }
`;

export const GenreLink = styled.span`
    cursor: pointer;
    text-decoration: none;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        gap: 15px;
        padding: 15px;
    }
`;

export const BackButton = styled.button`
    align-self: flex-start;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #6d23b6;
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const CategoryTitle = styled.h3`
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const CategoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 0;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const CategoryItem = styled.li`
    margin-bottom: 10px;
`;

export const CategoryLink = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: #ffffff;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.3s ease, box-shadow 0.2s ease;

    &:hover {
        background-color: #6d23b6;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 600px) {
        font-size: 14px;
        padding: 8px 12px;
    }
`;
