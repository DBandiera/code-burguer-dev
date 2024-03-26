import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Img2 from "../../assets/img2.png";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";
import Button from "../../components/Button";
import ContainerItens from "../../components/ContainerItens";

import {
  Container,
  Image,
  Order,
  TextContent,
  ClientName,
  OrderButton,
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

  async function deleteOrder(OrderId) {
    await axios.delete(`http://localhost:3001/orders/${OrderId}`)

    const newOrders = orders.filter(order => order.id !== OrderId)

    setOrders(newOrders)
  }

  // async function deleteOrder(orderId) {

  //   await axios.delete(`http://localhost:3001/orders/${orderId}`)

  //   const newOrders = orders.filter(order => order.id !== orderId)

  //   setOrders(newOrders)
  // }

  function goBackPage() {
    navigate('/')
  }


  return (
    <Container>
      
      <Image alt="logo-imagem" src={Img2} />

      <ContainerItens>
        <H1 isMarginLeft={true} >Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <TextContent>
                {order.order.split(', ').map((item) => (
                  <p key={item}>{item}</p>
                ))}
                {/* <p>{order.order}</p> */}
                <ClientName>{order.client}</ClientName>
              </TextContent>
              <OrderButton onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </OrderButton>
            </Order>
          ))}
        </ul>

        <Button isMarginLeft={true} onClick={goBackPage} >Voltar</Button>

      </ContainerItens>

    </Container>
  );
}

export default Orders;