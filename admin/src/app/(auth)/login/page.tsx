import IconLogo from "@/shared/components/atoms/IconLogo";
import { ShieldHalf } from "@/assets/icon/icons";
import LoginForm from "@/features/login/components/LoginForm";

function Page() {

  return (
    <div className="flex py-10 items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="mb-5 flex flex-col items-center gap-3 text-center">
          <IconLogo />

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            3ilajak
          </h1>

          <p className="text-sm text-slate-500">Healthcare Enterprise Portal</p>
        </div>

        <div className="rounded-2xl  bg-white px-8 pt-10 pb-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Sign In</h2>

            <p className="mt-1 text-sm text-slate-500">
              Access your clinical dashboard and patient records.
            </p>
          </div>

          <LoginForm />
          <div className="border border-gray-300 my-5"></div>

          <div className="text-center text-sm">
            By signing in, you agree to our
            <span className="text-blue-800"> Terms of Service</span> and
            <span className="text-blue-800"> HIPAA Compliance Policy</span>
          </div>
        </div>

        <div className="flex gap-2 mt-3 justify-center">
          <p className="border-r border-gray-400 pr-2 text-sm">
            SYSTEM STATUS: OPERATIONAL
          </p>
          <div className="text-sm flex gap-1 items-center">
            <ShieldHalf className="w-4 h-4" />
            SECURE AES-256
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
