import { useBudgetContextDispatch } from "@/providers/provider";
import { useForm } from "react-hook-form";

type FormData = {
  description: string;
  budget: number;
  brand: string;
  quantity: number;
  unitPrice: number;
}

export default function BudgetInput() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>();
  const dispatch = useBudgetContextDispatch();
  const description = watch("description");
  const budget = watch("budget");
  const brand = watch("brand");
  const quantity = watch("quantity");
  const unitPrice = watch("unitPrice");

  const handleAddBudget = () => {
    try {

      dispatch({
        type: "ADD_BUDGET",
        payload: {
          entry: {
            id: Date.now(), // Keep each entry unique by using the current timestamp
            description: description.trim(),
            budget: Math.round(budget * 100) / 100, // Round to 2 decimal places
            brand: brand.trim(),
            quantity: quantity,
            unitPrice: unitPrice
          }
        }
      });

      // Only reset if dispatch succeeds
      reset();

    } catch (error) {
      // Handle validation errors
      console.error("Error adding budget:", error);
      alert(error instanceof Error ? error.message : "Failed to add budget entry");
    }
  };

  return (
    <form className="flex flex-wrap items-center justify-center gap-4 h-full w-full" onSubmit={handleSubmit(handleAddBudget)}>
      <input
        className={`bg-white text-(--primary) rounded-md p-2 ${errors.description ? "outline-2 outline-solid outline-red-500" : ""}`} placeholder="Description *" type="text"
        {...register("description", { required: true })} />

      <input
        className={`bg-white text-(--primary) rounded-md p-2 ${errors.budget ? "outline-2 outline-solid outline-red-500" : ""}`} placeholder="Budget *" type="number"
        {...register("budget", { required: true })} />

      <input
        className="bg-white text-(--primary) rounded-md p-2" placeholder="Brand" type="text"
        {...register("brand")} />
      <input
        className="bg-white text-(--primary) rounded-md p-2" placeholder="Quantity" type="number"
        {...register("quantity")} />
      <input
        className="bg-white text-(--primary) rounded-md p-2" placeholder="Unit Price" type="number"
        {...register("unitPrice")} />

      <button 
        className="bg-(--accent) text-white rounded-md p-2 disabled:bg-gray-700" 
        disabled={!description || !budget} 
        type="submit">
          Add Budget
      </button>
    </form>
  );
}