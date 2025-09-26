export type Entry = {
  id?: number;
  description: string;
  amount: number;
}

export type BudgetContextType = {
  budgetEntries: Entry[]
}