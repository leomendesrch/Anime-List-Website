import styled from "styled-components";

export const SearchContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    column-gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

export const SearchInput = styled.input`
    height: 33px;
    width: 300px;
    border-radius: 10px;
    background-color: #0d0d0d;
    border: 1px solid #666666;
    color: white;
    padding-left: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
`
export const IconContainer = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0d0d0d;
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #666666;

    &:hover{
       background-color: #999999;
    }
`

export const SearchIcon = styled.img`
    height: 17px;
`