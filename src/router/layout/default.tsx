import { Outlet } from "react-router";
import { Header } from "../../components/header";
import {LayoutRouterContainer } from "./styled";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutRouterContainer>
        <Outlet />
      </LayoutRouterContainer>
    </>
  );
}
