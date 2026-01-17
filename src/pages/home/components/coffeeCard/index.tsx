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
import { useState } from "react";

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

interface CoffeeCardProps {
  coffee: CoffeeProps;
  cart: ReturnType<typeof HomeHook>;
}

export function CoffeeCardCatalog({ coffee, cart }: CoffeeCardProps) {
  const { handleAddToCart } = cart;
  const [quantify, setQuantify] = useState(1);

  function Add() {
    setQuantify((prev) => prev + 1);
  }

  function Remove() {
    setQuantify((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handle() {
    handleAddToCart(coffee.id, quantify);
    setQuantify(1);
  }

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
            <MinusIcon size={12} />
          </ButtonCard>
          {quantify}
          <ButtonCard onClick={Add}>
            <PlusIcon size={12} />
          </ButtonCard>
        </Quantity>
        <AddToCart onClick={handle}>
          <ShoppingCartIcon size={20} weight="fill" />
        </AddToCart>
      </ContainerPrice>
    </CoffeeCardContainer>
  );
}
