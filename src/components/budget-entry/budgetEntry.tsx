import { Entry } from "@/types/types";
import { useState } from "react";
import "./budgetEntry.css";
import { useBudgetContextDispatch } from "@/providers/provider";

export default function BudgetEntry({ entry, index }: { entry: Entry, index: number }) {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(entry.description);
    const [budget, setTotalPrice] = useState(entry.budget);
    const dispatch = useBudgetContextDispatch();

    const handleCancel = () => {
        setDescription(entry.description);
        setTotalPrice(entry.budget);
        setIsEditing(false);
    };

    const handleSave = () => {
        dispatch({
            type: "EDIT_BUDGET",
            payload: { entry: { ...entry, description, budget }, index },
        });
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch({
            type: "DELETE_BUDGET",
            payload: { index },
        });
    };

    return (
        <div 
            className="budget-list--item">
            {isEditing ? (
                <>
                    <input 
                        className="budget-list--entry-input" 
                        placeholder="Description" 
                        type="text" 
                        value={description} onChange={(e) => setDescription(e.target.value)} 
                        required/>
                    <input 
                        className="budget-list--entry-input" 
                        placeholder="Amount" 
                        type="number" 
                        value={budget} 
                        onChange={(e) => setTotalPrice(Number(e.target.value))} 
                        required/>
                    <div className="budget-list--item-buttons">
                        <div className="budget-list--item-buttons">
                            <button className="save-button" onClick={handleSave}>
                                Save
                            </button>
                            <button className="cancel-button" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <span>{entry.description}</span>
                    <span>€{entry.budget}</span>
                    <div className="budget-list--item-buttons">
                        <button className="edit-button" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="delete-button" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </>
            )
        }
        </div>
    );
}