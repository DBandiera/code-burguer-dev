import styled from 'styled-components';

import Background from "../../assets/background1.jpg"

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

    width: 300px;
    height:300px;

    margin-top: 5px;
    
    
`;

export const InputLabel = styled.p`

    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 1px;

    margin: 10px 36px 2px 52px;



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




