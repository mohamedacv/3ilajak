"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Loader2, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginInput = z.infer<typeof loginSchema>;

function LoginForm() {
  const router = useRouter();
  const { mutate, isPending, error, isError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginInput) => {
    mutate(data, {
      onSuccess: async (response) => {
        const res = await fetch("/api/auth/session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: response.token,
            admin: response.data,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to create session");
        }

        router.push("/");
        router.refresh();
      },
    });
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label className={errors.email ? "text-red-800" : ""} htmlFor="email">
          Email Address
        </Label>

        <div className="relative bg-gray-100 ">
          <Mail
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            id="email"
            placeholder="dr.smith@3ilajak.com"
            {...register("email")}
            className="h-11 border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
          />
        </div>
        {errors.email && <p className="text-red-800">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label
          className={errors.password ? "text-red-800" : ""}
          htmlFor="password"
        >
          Password
        </Label>

        <div className="relative bg-gray-100">
          <Lock
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="h-11 pl-10 pr-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
          >
            <Eye size={18} />
          </button>
        </div>
        {errors.password && (
          <p className="text-red-800">{errors.password.message}</p>
        )}
      </div>

      {isError && <p className="text-red-800">{error.message}</p>}

      <Button
        type="submit"
        disabled={isPending}
        className="h-11 w-full rounded-lg bg-blue-900 p-1.5 text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}

export default LoginForm;
