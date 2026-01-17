import { useHomeStore } from "./home.store";

export function HomeHook() {
  const { cart, addToCart,getTotalItems,removeFromCart,setquantify,clearCart  } = useHomeStore();
  const count = getTotalItems();
  const listCoffee = cart;

  function Setquantify(id: number, op: "+"|"-") {
    setquantify(id, op);
  }

  function handleAddToCart(id: number, quantity: number) {
    addToCart(id, quantity);
  }

  function remove(id: number) {
    removeFromCart(id);
  }

  return {
    listCoffee,
    count,
    handleAddToCart,
    remove,
    Setquantify,
    clearCart
  };
}
