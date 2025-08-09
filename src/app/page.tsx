"use client";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name // User image URL (optional)// A URL to redirect to after the user verifies their email (optional)
      },
      {
        onSuccess: () => {
          window.alert("success");
        },
        onError: () => {
          // display the error message
          window.alert("something went wrong");
        },
      }
    );
  };

  return (
    <div className="grid h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <div className="flex flex-col max-w-2xl gap-y-4 items-center justify-center">
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={onSubmit}>Create User</Button>
        </div>
      </div>
    </div>
  );
}
