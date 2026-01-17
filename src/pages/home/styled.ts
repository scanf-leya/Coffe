import styled from "styled-components";

export const HomeContainer = styled.main`
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
  justify-content: flex-start;
  margin-top: 2.375rem;
  margin-left: 1.5rem;
  gap: 2.5rem;

  @media (max-width: 1357px) {
    justify-content: center;
    margin-left: 0;
  }
`;
