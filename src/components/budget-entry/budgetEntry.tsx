import { useState } from "react";
import { Entry } from "@/app/types/types";

export default function BudgetEntry({ onAddBudget }: { onAddBudget: (budget: Entry) => void }) {

  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleAddBudget = () => {
    onAddBudget({ description, amount });
    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={handleAddBudget}>Add Budget</button>
    </div>
  );
}