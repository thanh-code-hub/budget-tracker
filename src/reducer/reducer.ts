import { Entry, BudgetContextType } from '@/types/types';

type ActionType = 'ADD_BUDGET' | 'EDIT_BUDGET' | 'DELETE_BUDGET';

// This is a type that ensures that at least one of the properties is valid
type RequireAtLeastOne<T> = {
	[K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];

// Either payloadIndex or payload must be provided
export type Action = {
	type: ActionType;
	payload: RequireAtLeastOne<{ index: number; entry: Entry }>;
};

export function budgetContextReducer(state: BudgetContextType, action: Action): BudgetContextType {
	try {
		switch (action.type) {
			case 'ADD_BUDGET':
				return {
					...state,
					budgetEntries: [...state.budgetEntries, action.payload.entry!],
				};
			case 'EDIT_BUDGET':
				return {
					...state,
					budgetEntries: state.budgetEntries.map((entry, index) =>
						index === action.payload.index ? action.payload.entry! : entry,
					),
				};
			case 'DELETE_BUDGET':
				return {
					...state,
					budgetEntries: state.budgetEntries.filter((entry, index) => index !== action.payload.index),
				};
			default:
				return state;
		}
	} catch (error) {
		console.error(error);
		return state;
	}
}
