import { coffees } from "../../../../const";
import { ConfirmRequestContainer } from "./styled";

interface CoffeRequest {
  quantity: number;
  id: number;
}

export function ConfirmRequest({ item }: { item: CoffeRequest[] }) {
  const totalItems = Array.isArray(item)
    ? item.reduce((total, curr) => {
        const dataCoffe = coffees.find((coffee) => coffee.id === curr.id);

        const price = Number(dataCoffe?.price) || 0;
        const quant = Number(curr.quantity) || 0;

        return total + price * quant;
      }, 0)
    : 0;
  const deliveryFee = 3.5;
  const totalPrice = totalItems + deliveryFee;

  return (
    <ConfirmRequestContainer>
      <h3>
        Total de itens <span>R$ {totalItems.toFixed(2)}</span>
      </h3>
      <h3>
        Entrega <span>R$ {deliveryFee}</span>
      </h3>
      <h2>
        Total <span>R$ {totalPrice.toFixed(2)}</span>
      </h2>
      <button type="submit">CONFIRMAR PEDIDO</button>
    </ConfirmRequestContainer>
  );
}
