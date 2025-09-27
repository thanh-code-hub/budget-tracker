import { Entry } from '@/types/types';
import { useState } from 'react';
import './budgetEntry.css';
import { useBudgetContextDispatch } from '@/providers/provider';
import { useForm } from 'react-hook-form';

export default function BudgetEntry({ entry, index }: { entry: Entry; index: number }) {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Entry>({
		defaultValues: entry,
	});

	const [isEditing, setIsEditing] = useState(false);
	const description = watch('description');
	const budget = watch('budget');
	const brand = watch('brand');
	const quantity = watch('quantity');
	const dispatch = useBudgetContextDispatch();

	const handleCancel = () => {
		reset(entry);
		setIsEditing(false);
	};

	const handleSave = () => {
		try {
			dispatch({
				type: 'EDIT_BUDGET',
				payload: {
					entry: { ...entry, description, budget, brand, quantity },
					index,
				},
			});
			setIsEditing(false);
		} catch (error) {
			console.error('Error saving budget:', error);
			alert(error instanceof Error ? error.message : 'Failed to update budget entry');
		}
	};

	const handleDelete = () => {
		try {
			dispatch({
				type: 'DELETE_BUDGET',
				payload: { index },
			});
		} catch (error) {
			console.error('Error deleting budget:', error);
			alert(error instanceof Error ? error.message : 'Failed to delete budget entry');
		}
	};

	return (
		<div className='budget-list--entry'>
			{isEditing ? (
				<form onSubmit={handleSubmit(handleSave)}>
					<input
						className={`budget-list--entry-input ${errors.description ? 'error' : ''}`}
						placeholder='Description'
						type='text'
						{...register('description', { required: true })}
					/>
					<input
						className={`budget-list--entry-input ${errors.budget ? 'error' : ''}`}
						placeholder='Amount'
						type='number'
						{...register('budget', { required: true, valueAsNumber: true })}
					/>
					<input
						className='budget-list--entry-input'
						placeholder='Brand'
						type='text'
						{...register('brand')}
					/>
					<input
						className='budget-list--entry-input'
						placeholder='Quantity'
						type='number'
						{...register('quantity', { valueAsNumber: true })}
					/>
					<div className='budget-list--entry-buttons'>
						<div className='budget-list--entry-buttons'>
							<button
								className='save-button'
								type='submit'
								onClick={handleSubmit(handleSave)}
								disabled={!description || !budget}
							>
								Save
							</button>
							<button className='cancel-button' onClick={handleCancel}>
								Cancel
							</button>
						</div>
					</div>
				</form>
			) : (
				<>
					<span>{entry.description}</span>
					<span>€{entry.budget}</span>
					<span>{entry.brand || ''}</span>
					<span>{entry.quantity || ''}</span>
					<div className='budget-list--entry-buttons'>
						<button className='edit-button' onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button className='delete-button' onClick={handleDelete}>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
}
