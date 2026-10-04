import AnalysisHome from "@/features/home/components/AnalysisHome";
import HomeGrowthChart from "@/features/home/components/HomeGrowthChart";
import StatisticsHome from "@/features/home/components/StatisticsHome";
import { dataDashbordGrowthChart } from "@/features/home/data/home";
import TitlePage from "@/shared/components/atoms/TitlePage";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";

function page() {
  return (
    <DashbordLayout>
      <div className="flex flex-col gap-6">
        <TitlePage
          title="Dashboard Overview"
          decs="Welcome back. Here's what's happening with the healthcare network today."
        />

        <AnalysisHome />

        <HomeGrowthChart data={dataDashbordGrowthChart} />

        <StatisticsHome />
      </div>
    </DashbordLayout>
  );
}

export default page;
