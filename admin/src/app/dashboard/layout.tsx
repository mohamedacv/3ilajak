import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <DashbordLayout>{children}</DashbordLayout>
    </>
  );
}
