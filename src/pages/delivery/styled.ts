import styled from "styled-components";

export const DeliverySection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const TextContent = styled.div`
  div {
    h2 {
      font-family: "Baloo 2", cursive;
      font-size: 2rem;
      color: ${(props) => props.theme["yellow-dark"]};
    }
    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 6px 36px;
  padding: 2.5rem;
  gap: 2rem;

  background: ${({ theme }) => theme.background};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme["yellow-dark"]},
      ${({ theme }) => theme["purple"]}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  div {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      span {
        font-size: 1rem;
        color: ${(props) => props.theme["base-text"]};
      }
    }
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

export const BenefitsText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Strong = styled.strong`
  font-weight: bold;
  color: ${(props) => props.theme["base-text"]};
`;

export const DeliveryInfo = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1163px) {
    flex-direction: column;
    gap: 2rem;
    }
  @media (max-width: 480px) {
    img {
      width: 100%;
    }
  }
`;
