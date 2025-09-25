"use client";
import BudgetList from "@/components/budget-list/budgetList";
import { useState } from "react";
import BudgetEntry from "@/components/budget-entry/budgetEntry";
import { Entry } from "@/app/types/types";

const dummy = [
  {
    description: "Budget",
    amount: 10000,
  },
  {
    description: "Expense",
    amount: 5000,
  },
  
  {
    description: "Savings",
    amount: 3000,
  },
  {
    description: "Loan",
    amount: 2000,
  },
];

export default function Home() {
  const [totalBudget, setTotalBudget] = useState<Entry[]>(dummy);
  
  const addBudget = (budget: Entry) => {
    setTotalBudget([...totalBudget, budget]);
  };

  return (
    <div className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h3>Total budget</h3>
      <h1>€10 000</h1>
      <BudgetEntry onAddBudget={addBudget}/>
      <BudgetList data={totalBudget}/>
    </div>
  );
}
