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

  h2{
    padding:2rem 0;
    font-family:'Baloo 2',cursive;
    font-weight: 800;
    font-size:2rem;
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr) ;
  row-gap: 2.5rem;
  column-gap: 2rem;
`;
