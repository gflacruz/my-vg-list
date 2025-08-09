'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignUp = () => {
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          window.alert("Success! Check your email for verification.");
        },
        onError: (error) => {
          window.alert(`Error: ${error.message}`);
        },
      }
    );
  };

  const handleGoogleSignUp = () => {
    authClient.signIn.social({ provider: "google" });
  };

  const handleGitHubSignUp = () => {
    authClient.signIn.social({ provider: "github" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="mt-2 text-gray-500">
            Create an account to get started.
          </p>
        </div>
        <div className="space-y-4">
          <Button onClick={handleGoogleSignUp} className="w-full">
            Sign Up with Google
          </Button>
          <Button onClick={handleGitHubSignUp} className="w-full">
            Sign Up with GitHub
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button onClick={handleEmailSignUp} className="w-full">
            Sign Up with Email
          </Button>
        </div>
      </div>
    </div>
  );
}
