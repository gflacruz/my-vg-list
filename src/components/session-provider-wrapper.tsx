"use client";

import { SessionProvider } from "better-auth/react";
import { authClient } from "@/lib/auth-client";

export function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider client={authClient}>{children}</SessionProvider>;
}
