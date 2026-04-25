import styled from "styled-components";

export const BrandSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  width: 100%;

  .bg-blur {
    position: absolute;
    inset: 0; /* ocupa só a section */
    z-index: -1; /* fica atrás do conteúdo */
  }
  /* BASE DAS SHAPES */
  .blob {
    position: absolute;
    filter: blur(90px);
    opacity: 0.4;
    border-radius: 50%;
  }

  /* 🟡 AMARELO PRINCIPAL */
  .blob-yellow {
    width: 200px;
    height: 100px;
    background: #ebc136;
    top: 200px;
    left: -50px;

    border-radius: 60% 40% 70% 30% / 40% 60% 40% 60%;
  }

  /* 🟣 ROXO GRANDE (fundo) */
  .blob-purple {
    width: 900px;
    height: 100px;
    background: #8047f8;
    top: 200px;
    left: 200px;

    border-radius: 50% 50% 40% 90% / 60% 40% 60% 40%;
  }

  /* 🟡 AMARELO CENTRAL */
  .blob-yellow-2 {
    width: 900px;
    height: 100px;
    background: #ebc136;
    top: 350px;
    left: 150px;

    border-radius: 70% 30% 60% 90% / 10% 40% 90% 80%;
  }

  /* 🟣 ROXO DIREITA */
  .blob-purple-2 {
    width: 400px;
    height: 100px;
    background: #8047f8;
    top: 200px;
    right: -100px;

    border-radius: 60% 40% 60% 40% / 50% 50% 60% 40%;
  }

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
