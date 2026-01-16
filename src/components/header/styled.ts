import styled from "styled-components";

export const HeaderContainer = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 10rem;
  a{
    &:focus{
      box-shadow: none;
    }
  }

  img {
    height: 40px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.25rem;
      padding: 0.5rem;

      border-radius: 6px;
      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      font-size: 0.875rem;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border-radius: 6px;
      padding: 0.5rem;
      gap: 0.25rem;
      background: ${(props) => props.theme["yellow-light"]};
    }
  }

  @media (max-width: 1012px) {
    padding: 1.5rem 2rem;
  }

`;


export const CartQuantity = styled.div`
  position: absolute;
  margin-top: -2.3rem;
  margin-left: 2.3rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
  text-align: center;
  line-height: 1.25rem;
  font-size: 0.75rem;
  font-weight: bold;
`;
