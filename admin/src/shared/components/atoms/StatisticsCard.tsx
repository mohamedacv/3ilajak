import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  desc: string | number;
  icon: LucideIcon;
  color?: string;
}

function StatisticsCard({
  title,
  desc,
  icon: Icon,
  color = "bg-blue-400",
}: Props) {
  return (
    <div className="flex items-center gap-7 rounded-lg border border-gray-300 bg-white p-6 shadow">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${color} `}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold text-gray-500">{title}</p>
        <span className="text-3xl font-bold">{desc}</span>
      </div>
    </div>
  );
}

export default StatisticsCard;
