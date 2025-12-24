import { coffees } from "../../const";
import { CoffeeBrand } from "./components/coffeBrand";
import { CoffeeCardCatalog } from "./components/coffeeCard";
import { CoffeeList, CoffeeSection, HomeContainer } from "./styled";

export function Home() {
  return (
    <HomeContainer>
      <CoffeeBrand />
      <CoffeeSection>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCardCatalog key={coffee.id} coffee={coffee}  />
          ))}
        </CoffeeList>
      </CoffeeSection>
    </HomeContainer>
  );
}
