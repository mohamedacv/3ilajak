import ActiveWorkflows from "@/features/notifications/components/ActiveWorkflows";
import StatisticsNotifications from "@/features/notifications/components/StatisticsNotifications";
import TableNotifications from "@/features/notifications/components/TableNotifications";
import TitlePage from "@/shared/components/atoms/TitlePage";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Notification Center"
        decs="Manage global communications and scheduled announcements."
      />

      <StatisticsNotifications />

      <TableNotifications />


      <ActiveWorkflows />
    </div>
  );
}

export default page;
