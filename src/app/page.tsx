"use client";
import BudgetList from "@/components/budget-list/budgetList";
import { useState } from "react";
import { Entry } from "@/types/types";
import Header from "@/components/header/header";

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

  return (
    <div className="max-w-screen max-h-screen h-screen v-screen flex flex-col">
      <Header totalBudget={totalBudget.reduce((acc, curr) => acc + curr.amount, 0)}/>
      <BudgetList data={totalBudget}/>
    </div>
  );
}
