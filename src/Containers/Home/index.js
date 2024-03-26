import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Img1 from "../../assets/img1.png";

import H1 from "../../components/Title";
import Button from "../../components/Button";
import ContainerItens from "../../components/ContainerItens";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  const inputOrder = useRef()
  const inputClient = useRef()

  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      client: inputClient.current.value,
    });

    setOrders([...orders, newOrder]);

    navigate('/orders')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Img1} />

      <ContainerItens>
        <H1>Faça seu Pedido</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Seu pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClient} placeholder="Seu nome" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;