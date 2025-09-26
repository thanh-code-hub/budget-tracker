"use client"
import { createContext, useContext, useReducer } from "react";
import { BudgetContextType } from "@/types/types";
import { budgetContextReducer, Action } from "@/reducer/reducer";

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

const defaultValues: BudgetContextType = {
    budgetEntries: dummy
}

const BudgetContext = createContext<BudgetContextType>({budgetEntries: []});
const BudgetContextDispatch = createContext<((action: Action) => void)>(() => {});

export function BudgetContextProvider({ children }: { children: React.ReactNode }) {

    const [state, dispatch] = useReducer(budgetContextReducer, defaultValues)

    return (
        <BudgetContext.Provider value={{budgetEntries: state.budgetEntries}}>
            <BudgetContextDispatch.Provider value={dispatch}>
                {children}
            </BudgetContextDispatch.Provider>
        </BudgetContext.Provider>
    );
}

export const useBudgetContext = () => useContext(BudgetContext);
export const useBudgetContextDispatch = () => useContext(BudgetContextDispatch);