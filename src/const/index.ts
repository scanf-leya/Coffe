import { Assets } from "../assets";

export const coffees = [
  {
    id: 1,
    img: Assets.coffee,
    title: "Expresso Tradicional",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9.90",
  },
  {
    id: 2,
    img: Assets.coffeeAmericano,
    title: "Expresso Americano",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9.90",
  },

  {
    id: 3,
    img: Assets.coffeeCremoso,
    title: "Expresso Cremoso",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "Café expresso tradicional com espuma cremosa",
    price: "9.90",
  },
  {
    id: 4,
    img: Assets.coffeeGelado,
    title: "Expresso Cremoso",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9.90",
  },
];

export const listCoffee = [
  { id: 1, quant: 2 },
  { id: 2, quant: 1 },
  { id: 3, quant: 4 },
];