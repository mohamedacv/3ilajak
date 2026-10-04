function ReviewPatient() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 bg-gray-100 border-2 border-gray-200/40 rounded-xl shadow p-4">
        <h1 className="capitalize text-xl font-semibold text-gray-500">
          Personal Info
        </h1>
        <div className="flex flex-col gap-7">
          <div className="flex">
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">Full Name</p>
              <span className="text-sm font-semibold text-gray-400">
                Zeyad Hatem
              </span>
            </div>
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">Phone</p>
              <span className="text-sm font-semibold text-gray-400">
                +20 111 207 9745
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">Email</p>
              <span className="text-sm font-semibold text-gray-400">
                zeyadhatemsabry@gmail.com
              </span>
            </div>
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">Gender</p>
              <span className="text-sm font-semibold text-gray-400">male</span>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">
                Date of Birth
              </p>
              <span className="text-sm font-semibold text-gray-400">
                15/11/2005
              </span>
            </div>
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">Blood Group</p>
              <span className="text-sm font-semibold text-gray-400">AB+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-gray-100 border-2 border-gray-200/40 rounded-xl shadow p-4">
        <h1 className="capitalize text-xl font-semibold text-gray-500">
          Medical Info
        </h1>
        <div className="flex flex-col gap-7">
          <div className="flex">
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">
                Medical History
              </p>
              <span className="text-sm font-semibold text-gray-400">
                New Patient
              </span>
            </div>
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">Allergies</p>
              <span className="text-sm font-semibold text-gray-400">
                There are no allergies.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 w-1/2">
            <p className="font-semibold text-gray-500 text-lg">
              Chronic Diseases
            </p>
            <span className="text-sm font-semibold text-gray-400">
              There are no chronic diseases.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-gray-100 border-2 border-gray-200/40 rounded-xl shadow p-4">
        <h1 className="capitalize text-xl font-semibold text-gray-500">
          Emergency Contact
        </h1>
        <div className="flex flex-col gap-7">
          <div className="flex">
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">
                Contact Name
              </p>
              <span className="text-sm font-semibold text-gray-400">Zeyad</span>
            </div>
            <div className="flex flex-col gap-0.5 w-1/2">
              <p className="font-semibold text-gray-500 text-lg">
                Relationship
              </p>
              <span className="text-sm font-semibold text-gray-400">
                Medical examinations
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 w-1/2">
            <p className="font-semibold text-gray-500 text-lg">Phone Number</p>
            <span className="text-sm font-semibold text-gray-400">
              +20 111 207 9745
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPatient;
