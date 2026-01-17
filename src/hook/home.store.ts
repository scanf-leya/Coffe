import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  quantity: number;
}
interface HomeStore {
  cart: CartItem[];
  addToCart: (id: number, quantity: number) => void;
  setquantify: (id: number, op: "+"|"-") => void;
  removeFromCart: (id: number) => void;
  getTotalItems: () => number;
  clearCart: () => void;
}
export const useHomeStore = create<HomeStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (id: number, quantity: number) => {
        const existingItem = get().cart.find((item) => item.id === id);
        if (existingItem) {
          set({
            cart: get().cart.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { id, quantity }],
          });
        }
      },
      setquantify: (id: number, op: "+"|"-") => {
        set({
          cart: get().cart.map((item) => {
            if (item.id === id) {
              const newQuantity = op === "+" ? item.quantity + 1 : item.quantity - 1;
              return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
          }
          ),
        });
      },
      removeFromCart: (id: number) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    { name: "@coffee-cart" }
  )
);
