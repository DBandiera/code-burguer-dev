import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 68px;
    padding: 0px 11px;
    justify-content: center;
    align-items: center;

    font-size: 28px;
    letter-spacing: 1px;
    font-weight: 50px;
    text-align: center;
    

    margin: 50px 36px 10px 36px;
    padding: 15px;
    
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

    ${props => props.isMarginLeft && `margin-left: 350px`};

`;