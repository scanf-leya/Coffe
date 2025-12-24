import { Outlet } from "react-router";
import { Header } from "../../components/header";
import { LayoutRouter, LayoutRouterContainer } from "./styled";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutRouter>
        <LayoutRouterContainer>
          <Outlet />
        </LayoutRouterContainer>
      </LayoutRouter>
    </>
  );
}
