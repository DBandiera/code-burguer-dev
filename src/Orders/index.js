import React, { useState, useEffect } from "react";
import { useNavigate } from "react-dom"

import Img1 from "../assets/img1.png"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function Orders() {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {

    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders");

      setOrders(newOrders);
    }

    fetchOrders()
  }, [])

  function App() {

    return (
      <Container>
        <Image alt="logo-imagem" src={Img1} />

        <ContainerItens>
          <H1>Faça seu Pedido</H1>
          <InputLabel>Pedido</InputLabel>
          <Input />

          <InputLabel>Nome do Cliente</InputLabel>
          <Input />

          <Button>Novo Pedido</Button>
        </ContainerItens>
      </Container>
    );
  }
}

export default App;