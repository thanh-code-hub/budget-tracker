import { Entry } from "@/types/types";
import BudgetEntry from "../budget-entry/budgetEntry";

export default function Header({ totalBudget }: { totalBudget: number }) {
    const addBudget = (budget: Entry) => {
        console.log(budget);
        // setTotalBudget([...totalBudget, budget]);
    };
    return (
        <div className="header grid grid-cols-2 gap-4 py-[2em] px-[5em] basis-1/3 bg-(--primary) text-white">
            <div className="h-full w-full flex flex-col justify-center items-start gap-2">
                    <h3 className="text-xl">Total budget</h3>
                    <h1 className="text-6xl font-bold">€{totalBudget}</h1>
            </div>
            <BudgetEntry onAddBudget={addBudget}/>
        </div>
    );
    }