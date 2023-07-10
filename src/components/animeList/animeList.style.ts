import styled from "styled-components";

export const AnimeListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    padding-bottom: 30px;
   justify-content: center;
   gap: 50px;
`

export const Card = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AnimeCard = styled.img`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 100%;
    border-radius: 15px;
`

export const AnimeTitle = styled.span`
    padding-top: 20px;
    height: 50px;
    max-width: 250px;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: white;
`