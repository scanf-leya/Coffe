import styled from "styled-components";

export const LayoutRouterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 10rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 90px);
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme["yellow"]};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  border: 1px solid green;

  @media (max-width: 1012px) {
    padding: 1.5rem 2rem;
  }
`;

export const LayoutRouter = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;