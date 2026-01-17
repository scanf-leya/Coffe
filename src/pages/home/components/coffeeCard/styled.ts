import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme["base-card"]};

  width: 14rem;
  border-radius: 0.375rem 2.25rem;

  img {
    position: relative;
    margin-top: -2.5rem;
    width: 120px;
    height: 120px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 0 1rem;
  
  h3 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem; 
  }
  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 2rem; 
  }
`;

export const TypesCoffee = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  span {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.375rem 0.75rem;
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 10px;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 90%;
  margin-top: auto;
  margin-bottom: 1.25rem;
`;

export const Price = styled.span`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: 1.25rem;
`;

export const PriceConteiner = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  gap: 0.125rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  padding: 0.475rem 0.375rem;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
`;

export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme["purple"]};
  
  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
  &:focus {
    box-shadow: none;
  }
`;

export const AddToCart = styled.button`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["purple-dark"]};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
  &:focus {
    box-shadow: none;
  }
`;