import { Entry } from "@/types/types";
import "./budgetList.css";

export default function BudgetList({ data }: { data: Entry[] }) {
  return (
    <div className="budget-list">
      <div className="budget-list--container">
        {data.map(entry => (
          <div 
            key={`${entry.id}`} 
            className="budget-list--item">
            <span>{entry.description}</span>
            <span>€{entry.amount}</span>
            <div className="budget-list--item-buttons">
              <button className="edit-button">
                Edit
              </button>
              <button className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}   