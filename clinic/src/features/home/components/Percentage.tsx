// import Titel from "@/shared/components/atoms/Titel";

interface Detail {
  title: string;
  value: string;
}

interface PercentageProps {
  data: {
    title: string;
    percentage: number;
    details: Detail[];
  };
}

export default function Percentage({ data }: PercentageProps) {
  const radius = 75;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (data.percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl p-6 shadow h-full">
      <h1 className="mb-8 text-xl font-semibold">{data.title}</h1>

      <div className="flex flex-col items-center">
        <div className="relative w-52 h-52">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 180 180">
            <circle
              cx="90"
              cy="90"
              r={normalizedRadius}
              stroke="#E7EBF4"
              strokeWidth={stroke}
              fill="none"
            />

            <circle
              cx="90"
              cy="90"
              r={normalizedRadius}
              stroke="#3563E9"
              strokeWidth={stroke}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: "0.8s",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">{data.percentage}%</h2>

            <span className="text-gray-500 text-sm">Completed</span>
          </div>
        </div>

        <div className="mt-8 w-full space-y-4">
          {data.details.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-none"
            >
              <p className="text-gray-500">{item.title}</p>

              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
