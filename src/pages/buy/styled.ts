import styled from "styled-components";

export const BuySection = styled.main`
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    padding-bottom: 5rem;
  }

  input {
    flex: 1;
    gap: 0.25rem;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme["base-input"]};
  }
`;

export const CompletRequest = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const CoffeeSell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  height: 19rem;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.yellow};
    border-radius: 8px;
  }
`;
