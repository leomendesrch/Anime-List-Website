import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

`

export const LogoImage = styled.img`
    height: 23px;
    width: auto;

    @media (max-width: 375px) {
        height: 20px;
    }
`

export const HeaderText = styled.span`
    
    font-size: 15px;
    color: #737373;
    font-family: 'Open Sans', sans-serif;
`

