import { getAllAppointment } from "@/features/appointment/api/getAllAppointment";
import AppointmentTable from "@/features/appointment/components/AppointmentTable";
import AppointmentToolbar from "@/features/appointment/components/AppointmentToolbar";
import TitlePage from "@/shared/components/atoms/TitlePage";

async function page() {
  
    const response = await getAllAppointment();

     const appointment = response.data;
  return (
     <div className="flex flex-col gap-6">
      <TitlePage
        title="Appointment Management"
        decs="Monitor and schedule patient consultations across all clinics."
      />

      <AppointmentToolbar />

      <AppointmentTable appointment={appointment}/>
    </div>
  );
}

export default page;
