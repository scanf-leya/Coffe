import { MinusIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
// import { Assets } from "../../../../assets";
import {
  ButtonCard,
  ButtonRemove,
  Coffee,
  CoffeeCardContainer,
  ContainerPrice,
  Quantity,
  TextContent,
} from "./styled";
import { coffees } from "../../../../const";
import { useState } from "react";

interface CoffeRequest{
  quant: number,
  id: number
}

export function CoffeeCardSell({ coffe }: { coffe: CoffeRequest }) {
  
  const dataCoffe = coffees.find((item) => item.id === coffe.id)
  
  const [quantity, setQuantity] = useState<number>(coffe.quant);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <CoffeeCardContainer>
      <Coffee>
          <img src={dataCoffe?.img} alt="" />
          <TextContent>
            <h3>{dataCoffe?.title}</h3>
            <ContainerPrice>
              <Quantity>
                <ButtonCard onClick={handleDecrease}>
                  <MinusIcon size={14} />
                </ButtonCard>
                {quantity}
                <ButtonCard onClick={handleIncrease}>
                  <PlusIcon size={14} />
                </ButtonCard>
              </Quantity>
              <ButtonRemove>
                <TrashIcon size={16} />
                <p>REMOVER</p>
              </ButtonRemove>
            </ContainerPrice>
          </TextContent>
        <p>{dataCoffe?.price}</p>
      </Coffee>
    </CoffeeCardContainer>
  );
}
