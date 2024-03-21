import styled from 'styled-components';
import Background from "../assets/background1.jpg"

export const Container = styled.div`

    width: 100vw;
    height: 100vh;

    position: relative;
    z-index: 0;
    background-size: cover;



    &:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("${Background}") no-repeat center center;
        background-size: cover;
        opacity: 0.7;
        z-index: -1;
    }
    
    

    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const Image = styled.img`

    margin-top: 5px;
    
    
`;

export const ContainerItens = styled.div`

    /* padding: 64px, 36px; */
    
    display: flex;
    flex-direction: column;

    height: 100%;

    /* min-height: 100vh; */

`;

export const H1 = styled.h1`

    font-size: 42px;
    font-style: normal;
    line-height: normal;
    font-weight: 700;
    text-align: center;

    margin-bottom: 68px;

`;

export const InputLabel = styled.p`

    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;

    margin: 0px 36px 2px 36px;



`;

export const Input = styled.input`

    width: 342px;
    height: 58px;

    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;

    margin: 0px 36px 0px 36px;

    font-size: 28px;
    font-family: Roboto, sans-serif;

    border: none;
`;

export const Button = styled.button`

    width: 342px;
    height: 68px;
    padding: 0 11px;
    justify-content: center;
    align-items: center;

    font-size: 28px;
    font-weight: 50px;

    margin: 76px 36px 10px 36px;
    
    position: relative;
    z-index: 0;
    border-radius: 15px;
    border: none;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000;
        border: none;
        border-radius: 14px;
        opacity: .85;
        z-index: -1;
    }

    &:hover{
        opacity: .7;
    }

    &:active{
        opacity: .5;
    }

`;