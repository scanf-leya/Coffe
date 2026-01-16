import styled from "styled-components";

export const HomeContainer = styled.main`
  border:1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6.75rem;
  padding-bottom: 5rem;
`;

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    padding: 2rem 0;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2rem;
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 2.5rem;
  border:1px solid blue;
`;
