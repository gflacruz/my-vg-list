"use client";

import { authClient } from "@/lib/auth-client";

import { Sidebar } from "@/components/sidebar";

export default function Home() {
  const { data: session } = authClient.useSession();

  return (
    <div className="grid h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <p>{session?.user.image}</p>
    </div>
  );
}
