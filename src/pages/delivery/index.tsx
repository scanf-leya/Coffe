import {
  CurrencyDollarIcon,
  MapPinIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { defaultTheme } from "../../style/theme/default";
import { Assets } from "../../assets";
import { BenefitItem, Benefits, BenefitsText, DeliveryInfo, DeliverySection, Strong, TextContent } from "./styled";

export function Delivery() {
  return (
    <DeliverySection>
      <TextContent>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>
      </TextContent>
      <DeliveryInfo>
        <Benefits>
          <BenefitsText>
            <BenefitItem $bgColor={defaultTheme["purple"]}>
              <MapPinIcon weight="fill" size={24} />
            </BenefitItem>
            <div>
              <span>
                Entrega em <Strong>Rua João Daniel Martineli, 102</Strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </BenefitsText>
          <BenefitsText>
            <BenefitItem $bgColor={defaultTheme["yellow"]}>
              <TimerIcon weight="fill" size={24} />
            </BenefitItem>
            <div>
              <span>Previsão de entrega</span>
              <span>
                <Strong>20 min - 30 min</Strong>
              </span>
            </div>
          </BenefitsText>
          <BenefitsText>
            <BenefitItem $bgColor={defaultTheme["yellow-dark"]}>
              <CurrencyDollarIcon weight="fill" size={24} />
            </BenefitItem>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <Strong>Cartão de Crédito</Strong>
              </span>
            </div>
          </BenefitsText>
        </Benefits>
        <img src={Assets.delivery} alt=""></img>
      </DeliveryInfo>
    </DeliverySection>
  );
}
