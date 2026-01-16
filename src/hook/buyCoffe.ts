import { useState } from "react";
import { useForm } from "react-hook-form";

export function BuyCoffeHook() {

  const { register, handleSubmit } = useForm();

  const [checkedCredit, setCheckedCredit] = useState(false);
  const [checkedDebit, setCheckedDebit] = useState(false);
  const [checkedMoney, setCheckedMoney] = useState(false);

  function checkedPayment(type: string) {
    if (type === "credit") {
      setCheckedCredit(true);
      setCheckedDebit(false);
      setCheckedMoney(false);
    } else if (type === "debit") {
      setCheckedCredit(false);
      setCheckedDebit(true);
      setCheckedMoney(false);
    } else if (type === "money") {
      setCheckedCredit(false);
      setCheckedDebit(false);
      setCheckedMoney(true);
    }
  }

  function handleInformYourData() {
    console.log();
  }
  return {
    checkedCredit,
    checkedDebit,
    checkedMoney,
    checkedPayment,
    register,
    handleSubmit,
    handleInformYourData,
  };
}
