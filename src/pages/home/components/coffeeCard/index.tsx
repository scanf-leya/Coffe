import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import {
  AddToCart,
  ButtonCard,
  CoffeeCardContainer,
  ContainerPrice,
  Price,
  PriceConteiner,
  Quantity,
  TextContent,
  TypesCoffee,
} from "./styled";
import { HomeHook } from "../../../../hook/home";

interface CoffeeProps {
  id: number;
  img: string;
  title: string;
  type: {
    id: number;
    name: string;
  }[];
  description: string;
  price: string;
}
export function CoffeeCardCatalog({ coffee }: { coffee: CoffeeProps }) {
  const {Add,Remove,handleAddToCart,quantify}=HomeHook()

  function handle(){return handleAddToCart(coffee.id)}

  return (
    <CoffeeCardContainer>
      <img src={coffee.img} alt="" />
      <TextContent>
        <TypesCoffee>
          {coffee.type.map((type) => (
            <span key={type.id}>{type.name}</span>
          ))}
        </TypesCoffee>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </TextContent>
      <ContainerPrice>
        <PriceConteiner>
          R$<Price>{coffee.price}</Price>
        </PriceConteiner>
        <Quantity>
          <ButtonCard onClick={Remove}>
            <MinusIcon size={14} />
          </ButtonCard>
          {quantify}
          <ButtonCard onClick={Add}>
            <PlusIcon size={14} />
          </ButtonCard>
        </Quantity>
        <AddToCart onClick={handle}>
          <ShoppingCartIcon size={24} weight="fill" />
        </AddToCart>
      </ContainerPrice>
    </CoffeeCardContainer>
  );
}
