import { Entry } from "@/app/types/types";
export default function BudgetList({ data }: { data: Entry[] }) {
  return (
    <div>
      {data.map(entry => (
        <div key={`${entry.description}-${entry.amount}`}>
          <span>{entry.description}</span>
          <span>€{entry.amount}</span>
        </div>
      ))}
    </div>
  );
}   