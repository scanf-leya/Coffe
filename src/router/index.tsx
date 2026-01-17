import { Route, Routes } from "react-router";
import { DefaultLayout } from "./layout/default";
import { Home } from "../pages/home";
import { BuyCoffee } from "../pages/buy";
import { Delivery } from "../pages/delivery";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCoffee />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
}
