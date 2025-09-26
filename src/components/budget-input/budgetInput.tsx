import { useState } from "react";
import { useBudgetContextDispatch } from "@/providers/provider";

export default function BudgetInput() {

  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useBudgetContextDispatch();

  const handleAddBudget = () => {
    dispatch({ 
      type: "ADD_BUDGET", 
      payload: { entry: { 
        id: Date.now(), // Keep each entry unique by using the current timestamp
        description, amount 
        } 
      }
    });
    setDescription("");
    setAmount(0);
  };

  return (
    <div className="flex items-center justify-center gap-4 h-full w-full">
      <input 
        className="bg-white text-(--primary) rounded-md p-2" placeholder="Description" type="text" 
        value={description} onChange={(e) => setDescription(e.target.value)} required/>
      <input 
        className="bg-white text-(--primary) rounded-md p-2" placeholder="Amount" type="number" 
        value={amount} onChange={(e) => setAmount(Number(e.target.value))} required/>
      <button 
        className="bg-(--accent) text-white rounded-md p-2 disabled:bg-gray-700" 
        onClick={handleAddBudget} disabled={description === "" || amount === 0}>
          Add Budget
      </button>
    </div>
  );
}