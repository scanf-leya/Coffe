import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";
import { defaultTheme } from "../../../../style/theme/default";
import { BenefitItem, Benefits, BrandSection, TextContent } from "./styled";
import { Assets } from "../../../../assets";

export function CoffeeBrand() {
  return (
    <BrandSection>
      <TextContent>
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </div>
        <Benefits>
          <span>
            <BenefitItem $bgColor={defaultTheme["yellow-dark"]}>
              <ShoppingCartIcon weight="fill" size={24} />
            </BenefitItem>
            Compra simples e segura
          </span>
          <span>
            <BenefitItem $bgColor={defaultTheme["base-text"]}>
              <PackageIcon weight="fill" size={24} />
            </BenefitItem>
            Embalagem mantém o café intacto
          </span>
          <span>
            <BenefitItem $bgColor={defaultTheme.yellow}>
              <TimerIcon weight="fill" size={24} />
            </BenefitItem>
            Entrega rápida e rastreada
          </span>
          <span>
            <BenefitItem $bgColor={defaultTheme.purple}>
              <CoffeeIcon weight="fill" size={24} />
            </BenefitItem>
            O café chega fresquinho até você
          </span>
        </Benefits>
      </TextContent>
      <img src={Assets.brand} alt=""></img>
    </BrandSection>
  );
}
