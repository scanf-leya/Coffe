import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinLineIcon,
  MoneyIcon,
} from "@phosphor-icons/react";
import { CoffeeCardSell } from "./components/buyCoffee";
import {
  BuySection,
  Request,
  RequestContainer,
  Location,
  Payment,
  TextContext,
  CompletRequest,
  InputList,
  TodoList,
  CheckboxContainer,
  HiddenCheckbox,
  LabelText,
  CoffeeSell,
} from "./styled";
import { defaultTheme } from "../../style/theme/default";
// import { HomeHook } from "../../hook/home";
import { BuyCoffeHook } from "../../hook/buyCoffe";
import { listCoffee } from "../../const";
import { ConfirmRequest } from "./components/confirmRequest";

export function BuyCoffee() {
  const { checkedCredit, checkedDebit, checkedMoney, checkedPayment } =
    BuyCoffeHook();
  // const { listCoffee } = HomeHook();

  // console.log(listCoffee);

  return (
    <form action="">
      <BuySection>
        <RequestContainer>
          <h2>Complete o seu Pedido</h2>
          <Request>
            <Location>
              <TextContext>
                <MapPinLineIcon size={22} color={defaultTheme["yellow-dark"]} />
                <div>
                  <span>Endereco de Entrega</span>
                  <span>
                    Informe o indereco onde deseja receber o seu pedido
                  </span>
                </div>
              </TextContext>
              <InputList>
                <input className="item1" type="text" placeholder="BI" />
                <input className="item2" type="text" placeholder="Rua" />
                <input
                  className="item3a"
                  type="text"
                  placeholder="Numero da casa"
                />
                <input
                  className="item3b"
                  type="text"
                  placeholder="Complemento"
                />
                <input className="item4a" type="text" placeholder="Bairro" />
                <input className="item4b" type="text" placeholder="cidade" />
                <input className="item4c" type="text" placeholder="QT" />
              </InputList>
            </Location>
            <Payment>
              <TextContext>
                <CurrencyDollarIcon size={22} color={defaultTheme.purple} />
                <div>
                  <span>Pagamento</span>
                  <span>
                    O pagamento e feito na Entrega, Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </TextContext>
              <TodoList>
                <CheckboxContainer checked={checkedCredit}>
                  <HiddenCheckbox
                    checked={checkedCredit}
                    onChange={() => checkedPayment("credit")}
                  />
                  <CreditCardIcon size={16} />
                  <LabelText>CARTÃO DE CRÉDITO</LabelText>
                </CheckboxContainer>
                <CheckboxContainer checked={checkedDebit}>
                  <BankIcon size={16} />
                  <HiddenCheckbox
                    checked={checkedDebit}
                    onChange={() => checkedPayment("debit")}
                  />
                  <LabelText>CARTÃO DE DÉBITO</LabelText>
                </CheckboxContainer>
                <CheckboxContainer checked={checkedMoney}>
                  <MoneyIcon size={16} />
                  <HiddenCheckbox
                    checked={checkedMoney}
                    onChange={() => checkedPayment("money")}
                  />
                  <LabelText>DINHEIRO</LabelText>
                </CheckboxContainer>
              </TodoList>
            </Payment>
          </Request>
        </RequestContainer>
        <CompletRequest>
          <h2>Cafe selecionado</h2>
          <CoffeeSell>
            {listCoffee.map((e, key) => (
              <CoffeeCardSell key={key} coffe={e} />
            ))}
            <ConfirmRequest item={listCoffee} />
          </CoffeeSell>
        </CompletRequest>
      </BuySection>
    </form>
  );
}
