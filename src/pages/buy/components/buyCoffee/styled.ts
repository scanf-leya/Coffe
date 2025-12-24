import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 23rem;
  img {
    height: 3.75rem;
  }
`;

export const Coffee = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1.5rem;
  border-top: 1px solid transparent;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
`;

export const Price = styled.p`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: 1.5rem;
`;
export const PriceConteiner = styled.p`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 0.625rem;
  font-weight: 700;
  gap: 0.25rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["purple"]};

  &:focus {
    box-shadow: none;
  }
`;

export const ButtonCard = styled(BaseButton)`
  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ButtonRemove = styled(BaseButton)`
  p {
    color: ${(props) => props.theme["base-text"]};
  }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
