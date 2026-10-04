import { LucideIcon, MoveUpRight } from "lucide-react";

interface StatisticsCardProps {
  title: string;
  value: number | string;
  percentage: string;
  icon: LucideIcon;
  color?: "blue" | "green" | "red" | "yellow" | "purple";
}

const colorVariants = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    badge: "bg-blue-100 text-blue-600",
  },
  green: {
    icon: "bg-green-100 text-green-600",
    badge: "bg-green-100 text-green-600",
  },
  red: {
    icon: "bg-red-100 text-red-600",
    badge: "bg-red-100 text-red-600",
  },
  yellow: {
    icon: "bg-yellow-100 text-yellow-600",
    badge: "bg-yellow-100 text-yellow-600",
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    badge: "bg-purple-100 text-purple-600",
  },
};

function StatisticsCard({
  title,
  value,
  percentage,
  icon: Icon,
  color = "blue",
}: StatisticsCardProps) {
  const styles = colorVariants[color];

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-xl ${styles.icon}`}>
          <Icon className="w-5 h-5" />
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${styles.badge}`}
        >
          <MoveUpRight className="w-3 h-3" />
          <span>{percentage}%</span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-3xl font-bold text-gray-900">{value}</span>

        <span className="text-sm text-gray-500 mt-1">{title}</span>
      </div>
    </div>
  );
}

export default StatisticsCard;
