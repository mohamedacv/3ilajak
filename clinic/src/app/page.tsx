import GrowthChart from "@/features/home/components/GrowthChart";
import Percentage from "@/features/home/components/Percentage";
import StatisticsSection from "@/features/home/components/StatisticsSection";
import { conversionRate, growthChart } from "@/features/home/data/home";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";

export default function Home() {
  return (
    <>
      <DashbordLayout>
        <div className="flex flex-col gap-8">
          <StatisticsSection />

          <div className="flex gap-2 flex-row">
            <div className="w-2/3">
              <GrowthChart data={growthChart} />
            </div>

            <div className="w-1/3">
              <Percentage data={conversionRate} />
            </div>
          </div>
        </div>
      </DashbordLayout>
    </>
  );
}
