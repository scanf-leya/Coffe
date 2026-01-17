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
import { HomeHook } from "../../../../hook/home";
import { coffees } from "../../../../const";

interface CoffeRequest {
  quantity: number;
  id: number;
}

export function CoffeeCardSell({ coffe }: { coffe: CoffeRequest }) {
  const { Setquantify,remove}=HomeHook();
  const dataCoffe = coffees.find((item) => item.id === coffe.id);
  
  const handleIncrease = () => {
    Setquantify(coffe.id, "+");
  }
  const handleDecrease = () => {
      Setquantify(coffe.id, "-");
  }
  const handleRemove = () => {
      remove(coffe.id);
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
                {coffe.quantity}
                <ButtonCard onClick={handleIncrease}>
                  <PlusIcon size={14} />
                </ButtonCard>
              </Quantity>
              <ButtonRemove onClick={handleRemove}>
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
