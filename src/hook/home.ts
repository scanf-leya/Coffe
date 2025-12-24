import { useState } from "react";

export function HomeHook() {
  const [quantify, setQuantify] = useState(1);
  const [count, setCount] = useState(0);
  const [listCoffee, setListCoffee] = useState<{ id: number, quant: number }[]>([])
  
  function Add() {
    setQuantify((prev) => prev + 1);
  }
  function Remove() {
    if(quantify > 0) setQuantify((prev) => prev - 1)
  }
  
  function handleAddToCart(id:number) {
    const AddCoffee = {
      id: id,
      quant:quantify,
    }
    setListCoffee((state) => [...state, AddCoffee])
    setQuantify(1)
    setCount((prev) => prev + 1)
    
    console.log(AddCoffee )
    console.log(listCoffee)
    console.log(count)
  }

    
   return{ quantify,listCoffee,count,setCount, Add,Remove,handleAddToCart}

}