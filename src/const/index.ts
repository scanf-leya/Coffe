import { Assets } from "../assets";

export const coffees =[
  {
    id: 1,
    img: Assets.expressoTradicional,
    title: "Expresso Tradicional",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9.90",
  },
  {
    id: 2,
    img: Assets.expressoAmericano,
    title: "Expresso Americano",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9.90",
  },
  {
    id: 3,
    img: Assets.expressoCremoso,
    title: "Expresso Cremoso",
    type: [{ id: 1, name: "TRADICIONAL" }],
    description: "Café expresso tradicional com espuma cremosa",
    price: "9.90",
  },
  {
    id: 4,
    img: Assets.expressoGelado,
    title: "Expresso Gelado",
    type: [
      { id: 1, name: "TRADICIONAL" },
      { id: 2, name: "GELADO" },
    ],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9.90",
  },
  {
    id: 5,
    img: Assets.cafeComLeite,
    title: "Café com Leite",
    type: [
      { id: 1, name: "TRADICIONAL" },
      { id: 3, name: "COM LEITE" },
    ],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9.90",
  },
  {
    id: 6,
    img: Assets.latte,
    title: "Latte",
    type: [
      { id: 1, name: "TRADICIONAL" },
      { id: 3, name: "COM LEITE" },
    ],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9.90",
  },
  {
    id: 7,
    img: Assets.capuccino,
    title: "Capuccino",
    type: [
      { id: 1, name: "TRADICIONAL" },
      { id: 3, name: "COM LEITE" },
    ],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9.90",
  },
  {
    id: 8,
    img: Assets.macchiato,
    title: "Macchiato",
    type: [
      { id: 1, name: "TRADICIONAL" },
      { id: 3, name: "COM LEITE" },
    ],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9.90",
  },
  {
    id: 9,
    img: Assets.mocaccino,
    title: "Mocaccino",
    type: [
      { id: 1, name: "TRADICIONAL" },
      { id: 3, name: "COM LEITE" },
    ],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9.90",
  },
  {
    id: 10,
    img: Assets.chocolateQuente,
    title: "Chocolate Quente",
    type: [
      { id: 4, name: "ESPECIAL" },
      { id: 3, name: "COM LEITE" },
    ],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9.90",
  },
  {
    id: 11,
    img: Assets.cubano,
    title: "Cubano",
    type: [
      { id: 4, name: "ESPECIAL" },
      { id: 5, name: "ALCOÓLICO" },
      { id: 2, name: "GELADO" },
    ],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9.90",
  },
  {
    id: 12,
    img: Assets.havaiano,
    title: "Havaiano",
    type: [{ id: 4, name: "ESPECIAL" }],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9.90",
  },
  {
    id: 13,
    img: Assets.arabe,
    title: "Árabe",
    type: [{ id: 4, name: "ESPECIAL" }],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9.90",
  },
  {
    id: 14,
    img: Assets.irlandes,
    title: "Irlandês",
    type: [
      { id: 4, name: "ESPECIAL" },
      { id: 5, name: "ALCOÓLICO" },
    ],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9.90",
  },
];


export const listCoffee = [
  { id: 1, quant: 2 },
  { id: 2, quant: 1 },
  { id: 3, quant: 4 },
];