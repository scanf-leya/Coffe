import styled from "styled-components";



const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  @media (max-width: 393px) {
    background-color: transparent;}
`;

export const Location = styled(Container)``;

export const TextContext = styled.div`
  display: flex;
  gap: 0.5rem;
  div {
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
      color: ${(props) => props.theme["base-subtitle"]};
    }
    span:nth-child(2) {
      font-size: 0.875rem;
    }
  }
`;

export const InputList = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto; /* 4 linhas */
  grid-template-columns: 12.5rem 1fr 3.75rem; /* 3 colunas para a última linha */
  gap: 1rem;

  /* Primeira linha: elemento com largura de 12.5rem */
  .item1 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: 12.5rem;
  }

  /* Segunda linha: elemento ocupa a linha inteira */
  .item2 {
    grid-row: 2 / 3;
    grid-column: 1 / 4;
  }

  /* Terceira linha: duas colunas, primeira com 12.5rem */
  .item3a {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    width: 12.5rem;
  }
  .item3b {
    grid-row: 3 / 4;
    grid-column: 2 / 4;
  }

  /* Quarta linha: três colunas, primeira 12.5rem, terceira 3.75rem */
  .item4a {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
    width: 12.5rem;
  }
  .item4b {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
  }
  .item4c {
    grid-row: 4 / 5;
    grid-column: 3 / 4;
    width: 3.75rem;
  }
 
   @media (max-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .item1,
    .item2,
    .item3a,
    .item3b,
    .item4a,
    .item4b,
    .item4c {
      width: 100%;
    }
  }
`;

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
`;

export const TodoList = styled.div`
  display: flex;
  align-items: center;
  gap:1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const CheckboxContainer = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["base-button"]};

  border: 1px solid transparent;
  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;

  cursor: pointer;
  transition: border 0.2s, background 0.2s;
  color: ${(props) => props.theme["purple"]};

  /* Estilo quando selecionado */
  ${(props) =>
    props.checked &&
    `
    background:${props.theme["purple-light"]};
    border: 1px solid ${props.theme["purple"]};
  `}

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  input {
    display: none;
  }

  label {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    font-weight: 400;
  }
`;


export const Payment = styled(Container)``;