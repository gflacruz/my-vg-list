'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { useSession } from "better-auth/react";

export function Header() {
    const { session } = useSession();

    const handleSignOut = () => {
        authClient.signOut();
    };

    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <div className="flex items-center w-full gap-4 md:gap-2 lg:gap-4">
                <div className="flex-1">
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full md:w-[300px] lg:w-[400px]"
                    />
                </div>
                <div className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Avatar>
                                <AvatarImage src={session.user?.image || ''} />
                                <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                            </Avatar>
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
