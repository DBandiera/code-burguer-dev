import React from "react";

import Img1 from "../assets/img1.png";
import Trash from "../assets/trash.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  Order,
} from "./styles";

function App() {

  const orders = [
    { id: Math.random(), order: "X-Salada, 2 batatas grandes, 2 coca-cola, 1 pizza", client: "Deivid" },
    { id: Math.random(), order: "X-Salada, 1 batata, 1 coca-cola", client: "Luciene" }]

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

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div className="text-content">
                {order.order.split(', ').map((item) => (
                  <p key={item}>{item}</p>
                ))}
                {/* <p>{order.order}</p> */}
                <p className="client-name">{order.client}</p>
              </div>
              <button><img src={Trash} alt="lata-de-lixo" /></button>
            </Order>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;