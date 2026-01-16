import {
  MapPinLineIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  BankIcon,
  MoneyIcon,
} from "@phosphor-icons/react";
import { BuyCoffeHook } from "../../../../hook/buyCoffe";
import { defaultTheme } from "../../../../style/theme/default";
import {
  RequestContainer,
  TextContext,
  InputList,
  Payment,
  TodoList,
  CheckboxContainer,
  Location,
  Request,
} from "./styled";


export function RequestForm() {
  const { checkedCredit, checkedDebit, checkedMoney, checkedPayment,register } =
    BuyCoffeHook();

  return (
    <RequestContainer>
      <h2>Complete o seu Pedido</h2>
      <Request>
        <Location>
          <TextContext>
            <MapPinLineIcon size={22} color={defaultTheme["yellow-dark"]} />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o indereço onde deseja receber o seu pedido</span>
            </div>
          </TextContext>
          <InputList>
            <input
              className="item1"
              type="text"
              placeholder="BI"
              {...register("bi")}
            />
            <input
              className="item2"
              type="text"
              placeholder="Rua"
              {...register("rua")}
            />
            <input
              className="item3a"
              type="text"
              placeholder="Numero da casa"
              {...register("Ncasa")}
            />
            <input
              className="item3b"
              type="text"
              placeholder="Complemento"
              {...register("compl")}
            />
            <input
              className="item4a"
              type="text"
              placeholder="Bairro"
              {...register("bairro")}
            />
            <input
              className="item4b"
              type="text"
              placeholder="cidade"
              {...register("cidade")}
            />
            <input
              className="item4c"
              type="text"
              placeholder="QT"
              {...register("qt")}
            />
          </InputList>
        </Location>
        <Payment>
          <TextContext>
            <CurrencyDollarIcon size={22} color={defaultTheme.purple} />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento e feito na Entrega, Escolha a forma que deseja pagar
              </span>
            </div>
          </TextContext>
          <TodoList>
            <CheckboxContainer checked={checkedCredit}>
              <CreditCardIcon size={16} />
              <input
                type="checkbox"
                name="credit"
                id="credit"
                checked={checkedCredit}
                onChange={() => checkedPayment("credit")}
              />
              <label htmlFor="credit">CARTÃO DE CRÉDITO</label>
            </CheckboxContainer>
            <CheckboxContainer checked={checkedDebit}>
              <BankIcon size={16} />
              <input
                type="checkbox"
                name="debit"
                id="debit"
                checked={checkedDebit}
                onChange={() => checkedPayment("debit")}
              />
              <label htmlFor="debit">CARTÃO DE DÉBITO</label>
            </CheckboxContainer>
            <CheckboxContainer checked={checkedMoney}>
              <input
                type="checkbox"
                name="money"
                id="money"
                checked={checkedMoney}
                onChange={() => checkedPayment("money")}
              />
              <MoneyIcon size={16} />
              <label htmlFor="money">DINHEIRO</label>
            </CheckboxContainer>
          </TodoList>
        </Payment>
      </Request>
    </RequestContainer>
  );
}
