import { NavLink } from "react-router";
import { Assets } from "../../assets";
import { CartQuantity, HeaderContainer } from "./styled";
import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { defaultTheme } from "../../style/theme/default";
import { HomeHook } from "../../hook/home";

export function Header() {
  const {count}=HomeHook()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Assets.logo} alt="Logotipo Coffee Delivery" />
      </NavLink>
      <nav>
        <span>
          <MapPinIcon size={24} color={defaultTheme.purple} weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/buy">
          <ShoppingCartIcon
            size={24}
            color={defaultTheme["yellow-dark"]}
            weight="fill"
          />
          {count > 0 && <CartQuantity>{count}</CartQuantity>}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
