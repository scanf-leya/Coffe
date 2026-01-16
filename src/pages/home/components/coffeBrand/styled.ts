import styled from "styled-components";

export const BrandSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  img {
    width: 476px;
    height: 360px;
  }
  @media (max-width: 1143px) {
    flex-direction: column;
    text-align: center;
    img {
      margin-top: 2rem;
      width: 80%;
      height: auto;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
  }
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

`;

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  justify-items: center;
  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
  }
`;

export const BenefitItem = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${(props) => props.theme.white};
`;
