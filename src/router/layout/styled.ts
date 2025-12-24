import styled from "styled-components";

export const LayoutRouterContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 10rem;
  height: calc(100vh - 10rem);
`;

export const LayoutRouter = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
`;