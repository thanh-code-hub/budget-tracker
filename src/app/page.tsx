"use client";
import BudgetList from "@/components/budget-list/budgetList";
import Header from "@/components/header/header";
import { useBudgetContext } from "@/providers/provider";

export default function Home() {
  const { budgetEntries } = useBudgetContext();
  
  return (
    <div className="max-w-screen max-h-screen h-screen v-screen flex flex-col">
      <Header totalBudget={budgetEntries.reduce((acc, curr) => acc + curr.budget, 0)}/>
      <BudgetList data={budgetEntries}/>
    </div>
  );
}
