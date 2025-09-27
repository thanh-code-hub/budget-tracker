import { useBudgetContextDispatch } from '@/provider/provider';
import { useForm } from 'react-hook-form';

type FormData = {
	description: string;
	budget: number;
	brand: string;
	quantity: number;
};

export default function BudgetInput() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormData>();
	const dispatch = useBudgetContextDispatch();
	const description = watch('description');
	const budget = watch('budget');
	const brand = watch('brand');
	const quantity = watch('quantity');

	const handleAddBudget = () => {
		try {
			dispatch({
				type: 'ADD_BUDGET',
				payload: {
					entry: {
						id: Date.now(), // Keep each entry unique by using the current timestamp
						description: description.trim(),
						budget: Number(budget),
						brand: brand.trim(),
						quantity: Number(quantity),
					},
				},
			});

			// Only reset if dispatch succeeds
			reset();
		} catch (error) {
			// Handle validation errors
			console.error('Error adding budget:', error);
			alert(error instanceof Error ? error.message : 'Failed to add budget entry');
		}
	};

	return (
		<form
			className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 h-content w-full'
			onSubmit={handleSubmit(handleAddBudget)}
		>
			<input
				className={`bg-white text-(--primary) p-2 ${errors.description ? 'error' : ''}`}
				placeholder='Description *'
				type='text'
				{...register('description', { required: true })}
			/>

			<input
				className={`bg-white text-(--primary) p-2 ${errors.budget ? 'error' : ''}`}
				placeholder='Budget *'
				type='number'
				{...register('budget', { required: true, valueAsNumber: true })}
			/>

			<input className='bg-white text-(--primary) p-2' placeholder='Brand' type='text' {...register('brand')} />
			<input
				className='bg-white text-(--primary) p-2'
				placeholder='Quantity'
				type='number'
				{...register('quantity', { valueAsNumber: true })}
			/>
			<button
				className='bg-(--accent) text-white p-2 disabled:bg-gray-700'
				disabled={!description || !budget}
				type='submit'
			>
				Add Budget
			</button>
		</form>
	);
}
