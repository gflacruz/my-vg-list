import { Button } from "@/components/ui/button";

const links = [
    { name: "Reviews", href: "/reviews" },
    { name: "Collections", href: "/collections" },
    { name: "Platforms", href: "/platforms" },
    { name: "Stores", href: "/stores" },
    { name: "Genres", href: "/genres" },
    { name: "Creators", href: "/creators" },
    { name: "Tags", href: "/tags" },
    { name: "Developers", href: "/developers" },
    { name: "Publishers", href: "/publishers" },
];

export function Sidebar() {
    return (
        <div className="hidden lg:block border-r h-full">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <span className="">My VG List</span>
                    </a>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {links.map((link) => (
                            <Button key={link.name} asChild variant="ghost" className="justify-start">
                                <a href={link.href}>{link.name}</a>
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
