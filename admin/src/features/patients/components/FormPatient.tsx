import ContactPatient from "./add/ContactPatient"
import PersonalPatient from "./add/PersonalPatient"
import SecurityPatient from "./add/SecurityPatient"


function FormPatient() {
  return (
    <div className="flex flex-col gap-8">
      <PersonalPatient />

      <ContactPatient />

      <SecurityPatient />
    </div>
  )
}

export default FormPatient