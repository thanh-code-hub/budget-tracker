"use client";
import BudgetList from "@/components/budget-list/budgetList";
import { useState } from "react";
import { Entry } from "@/types/types";
import Header from "@/components/header/header";

const dummy = [
  {
    id: 1,
    description: "Budget",
    amount: 10000,
  },
  {
    id: 2,
    description: "Expense",
    amount: 5000,
  },
  
  {
    id: 3,
    description: "Savings",
    amount: 3000,
  },
  {
    id: 4,
    description: "Loan",
    amount: 2000,
  },
  {
    id: 5,
    description: "Other",
    amount: 6500,
  },
  {
    id: 6,
    description: "Other",
    amount: 1000,
  },
  {
    id: 7,
    description: "Other",
    amount: 1000,
  },
  {
    id: 8,
    description: "Other",
    amount: 1000,
  },
  {
    id: 9,
    description: "Other",
    amount: 1000,
  },
  {
    id: 10,
    description: "Other",
    amount: 10000,
  },
  {
    id: 11,
    description: "Other",
    amount: 1200,
  },
  {
    id: 12,
    description: "Other",
    amount: 500,
  },
  {
    id: 13,
    description: "Other",
    amount: 17400,
  },
  {
    id: 14,
    description: "Other",
    amount: 210,
  },
  {
    id: 15,
    description: "Other",
    amount: 21000,
  }
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
