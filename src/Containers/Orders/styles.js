import styled from 'styled-components';

import Background from "../../assets/background2.jpg"

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

    width: 170px;
    height: 180px;

    margin-top: 5px;
    margin-left: 350px;
    
`;

export const Order = styled.li`
    min-width: 342px;
    min-height: 101px;

    background-color: #FFFFFF;
    border: none;
    border-radius: 14px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 26px 36px 5px 350px;
    padding: 10px;
    position: relative;
    
    outline: none;

    p{
        font-family: Roboto;
        margin: 0;
    }
`;

export const TextContent = styled.div`
    align-items: ${(props) => props.aling || `flex-start`};
    width: 100%;
`;

export const ClientName = styled.p`
  font-weight: ${(props) => props.weight || 'bold'};
`;

export const OrderButton = styled.button`
  background-color: ${(props) => props.bgColor || 'transparent'};
  border: none;
  align-self: ${(props) => props.alignSelf || 'flex-end'};
  margin-top: auto;
`;

