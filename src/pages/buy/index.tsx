import { CoffeeCardSell } from "./components/buyCoffee";
import { BuySection, CompletRequest, CoffeeSell, CoffeeList } from "./styled";

import { listCoffee } from "../../const";
import { ConfirmRequest } from "./components/confirmRequest";
import { RequestForm } from "./components/requestForm";
import { BuyCoffeHook } from "../../hook/buyCoffe";

export function BuyCoffee() {
  const { handleInformYourData, handleSubmit } = BuyCoffeHook();
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
