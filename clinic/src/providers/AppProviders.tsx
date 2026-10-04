"use client";
import { ReactNode } from "react";
import ReactQueryProvider from "./React-query-provider";

interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
