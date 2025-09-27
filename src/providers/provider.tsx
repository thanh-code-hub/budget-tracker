"use client"
import { createContext, useContext, useReducer } from "react";
import { BudgetContextType } from "@/types/types";
import { budgetContextReducer, Action } from "@/reducer/reducer";

const dummy = [
    {
      id: 1,
      description: "Budget",
      budget: 10000,
    },
    {
      id: 2,
      description: "Expense",
      budget: 5000,
    },
    
    {
      id: 3,
      description: "Savings",
      budget: 3000,
    },
    {
      id: 4,
      description: "Loan",
      budget: 2000,
    },
    {
      id: 5,
      description: "Other",
      budget: 6500,
    },
    {
      id: 6,
      description: "Other",
      budget: 1000,
    },
    {
      id: 7,
      description: "Other",
      budget: 1000,
    },
    {
      id: 8,
      description: "Other",
      budget: 1000,
    },
    {
      id: 9,
      description: "Other",
      budget: 1000,
    },
    {
      id: 10,
      description: "Other",
      budget: 10000,
    },
    {
      id: 11,
      description: "Other",
      budget: 1200,
    },
    {
      id: 12,
      description: "Other",
      budget: 500,
    },
    {
      id: 13,
      description: "Other",
      budget: 17400,
    },
    {
      id: 14,
      description: "Other",
      budget: 210,
    },
    {
      id: 15,
      description: "Other",
      budget: 21000,
    }
  ];

const defaultValues: BudgetContextType = {
    budgetEntries: dummy
}

const BudgetContext = createContext<BudgetContextType>({budgetEntries: []});
const BudgetContextDispatch = createContext<((action: Action) => void)>(() => {});

export function BudgetContextProvider({ children }: { children: React.ReactNode }) {

    const [state, dispatch] = useReducer(budgetContextReducer, defaultValues)

    return (
        <BudgetContext value={{budgetEntries: state.budgetEntries}}>
            <BudgetContextDispatch value={dispatch}>
                {children}
            </BudgetContextDispatch>
        </BudgetContext>
    );
}

export const useBudgetContext = () => useContext(BudgetContext);
export const useBudgetContextDispatch = () => useContext(BudgetContextDispatch);