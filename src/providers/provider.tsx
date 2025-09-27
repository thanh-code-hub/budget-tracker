"use client"
import { createContext, useContext, useReducer } from "react";
import { BudgetContextType } from "@/types/types";
import { budgetContextReducer, Action } from "@/reducer/reducer";


// Some dummy data to test the app
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
      description: "Tech",
      budget: 2000,
    },
    {
      id: 5,
      description: "Other",
      budget: 6500,
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