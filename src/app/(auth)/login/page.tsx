'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          window.location.href = "/";
        },
        onError: (error) => {
          window.alert(`Error: ${error.message}`);
        },
      }
    );
  };

  const handleGoogleLogin = () => {
    authClient.signIn.social({ provider: "google" });
  };

  const handleGitHubLogin = () => {
    authClient.signIn.social({ provider: "github" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="mt-2 text-gray-500">Welcome back!</p>
        </div>
        <div className="space-y-4">
          <Button onClick={handleGoogleLogin} className="w-full">
            Login with Google
          </Button>
          <Button onClick={handleGitHubLogin} className="w-full">
            Login with GitHub
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleEmailLogin} className="w-full">
            Login with Email
          </Button>
        </div>
      </div>
    </div>
  );
}
