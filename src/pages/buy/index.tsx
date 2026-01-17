import { CoffeeCardSell } from "./components/buyCoffee";
import { BuySection, CompletRequest, CoffeeSell, CoffeeList } from "./styled";

import { ConfirmRequest } from "./components/confirmRequest";
import { RequestForm } from "./components/requestForm";
import { BuyCoffeHook } from "../../hook/buyCoffe";
import { HomeHook } from "../../hook/home";

export function BuyCoffee() {
  const { handleInformYourData, handleSubmit } = BuyCoffeHook();
  const { listCoffee } = HomeHook();
  return (
    <BuySection>
      <form onSubmit={handleSubmit(handleInformYourData)} action="">
        <RequestForm />
        <CompletRequest>
          <h2>Café selecionado</h2>
          <CoffeeSell>
            <CoffeeList>
              {listCoffee.map((e, key) => (
                <CoffeeCardSell key={key} coffe={e} />
              ))}
            </CoffeeList>
            <ConfirmRequest item={listCoffee} />
          </CoffeeSell>
        </CompletRequest>
      </form>
    </BuySection>
  );
}
