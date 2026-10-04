import AddAppointments from "@/features/appointments/components/add/AddAppointments";
import TableAppointments from "@/features/appointments/components/TableAppointments";

function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end rounded-xl">
        <AddAppointments />
      </div>

      <TableAppointments />
    </div>
  );
}

export default page;
