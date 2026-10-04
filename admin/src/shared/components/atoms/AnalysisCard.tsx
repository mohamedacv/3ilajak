import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  desc: string | number;
  analysis: string;
  icon: LucideIcon;
  color?: string;
}

function AnalysisCard({
  title,
  desc,
  analysis,
  icon: Icon,
  color = "bg-blue-400",
}: Props) {
  return (
    <div className="bg-white shadow p-6 flex flex-col gap-4 rounded-xl border border-gray-300">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${color}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <span className={`rounded-full px-3 py-1 font-medium  ${color}`}>
          {analysis}
        </span>
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-semibold text-gray-500 uppercase">{title}</p>
        <span className="text-3xl font-bold">{desc}</span>
      </div>
    </div>
  );
}

export default AnalysisCard;
