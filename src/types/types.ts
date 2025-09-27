export type Entry = {
	id?: number;
	description: string;
	budget: number;
	brand?: string;
	quantity?: number;
};

export type BudgetContextType = {
	budgetEntries: Entry[];
};
