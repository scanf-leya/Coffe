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
  HiddenCheckbox,
  LabelText,
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
                <span>Endereco de Entrega</span>
                <span>Informe o indereco onde deseja receber o seu pedido</span>
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
  );
}
