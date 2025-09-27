import BudgetEntry from '../budget-input/budgetInput';

export default function Header({ totalBudget }: { totalBudget: number }) {
	return (
		<div className='header grid grid-cols-2 gap-4 py-[1em] px-[5em] basis-1/4 bg-(--primary) text-white'>
			<div className='h-full w-full flex flex-col justify-center items-start gap-2'>
				<h3 className='text-xl'>Total budget</h3>
				<h1 className='text-6xl font-bold'>€{totalBudget}</h1>
			</div>
			<BudgetEntry />
		</div>
	);
}
