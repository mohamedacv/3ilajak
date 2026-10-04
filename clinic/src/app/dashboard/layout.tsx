import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return <DashbordLayout>{children}</DashbordLayout>;
}
