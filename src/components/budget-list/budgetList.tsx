import { Entry } from '@/types/types';
import './budgetList.css';
import BudgetEntry from '../budget-entry/budgetEntry';

export default function BudgetList({ data }: { data: Entry[] }) {
	return (
		<div className='budget-list'>
			<div className='budget-list--container'>
				{data.map((entry, index) => (
					<BudgetEntry key={`${entry.id}`} entry={entry} index={index} />
				))}
			</div>
		</div>
	);
}
