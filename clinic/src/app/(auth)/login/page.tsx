import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IconLogo from "@/shared/components/atoms/IconLogo";
import { Eye, Lock, Mail, ShieldHalf } from "@/assets/icons/icons";

function Page() {
  return (
    <div className="flex py-10 items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="mb-5 flex flex-col items-center gap-3 text-center">
          <IconLogo />

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            MediPro Enterprise
          </h1>

          <p className="text-slate-500">City General Clinic</p>
        </div>

        <div className="rounded-2xl  bg-white px-8 pt-10 pb-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Sign In</h2>

            <p className="mt-1 text-sm text-slate-500">
              Access your clinical dashboard and patient records.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <div className="relative bg-gray-100 ">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="dr.smith@3ilajak.com"
                  className="h-11 pl-10 border-2 border-gray-200 "
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>

                <Button
                  type="button"
                  variant="link"
                  className="h-auto p-0 text-sm text-blue-800"
                >
                  Forgot Password?
                </Button>
              </div>

              <div className="relative bg-gray-100">
                <Lock
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-11 pl-10 pr-10 border-2 border-gray-200 "
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />

              <Label
                htmlFor="remember"
                className="cursor-pointer font-normal text-slate-600"
              >
                Remember this device for 30 days
              </Label>
            </div>

            <Button
              type="submit"
              className="h-11 w-full bg-blue-900 text-white p-1.5 rounded-lg"
            >
              Sign In
            </Button>
          </form>
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
