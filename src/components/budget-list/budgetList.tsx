import { Entry } from "@/types/types";
export default function BudgetList({ data }: { data: Entry[] }) {
  return (
    <div className="flex flex-col justify-start items-center ">
      {data.map(entry => (
        <div key={`${entry.description}-${entry.amount}`}>
          <span>{entry.description}</span>
          <span>€{entry.amount}</span>
        </div>
      ))}
    </div>
  );
}   