"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";

export function Header() {
  const { data: session, isPending } = useSession();
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          MyVGList
        </Link>
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-2xl">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {isPending ? (
            <div>Loading...</div>
          ) : session ? (
            <>
              <Link href={`/profile/${session.user.id}`}>
                <Avatar>
                  <AvatarImage src={session.user.image || ""} />
                  <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
                </Avatar>
              </Link>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <a href="/login">Log In</a>
              </Button>
              <Button asChild>
                <a href="/signup">Sign Up</a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
