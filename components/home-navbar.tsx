"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyonSolutionsIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Prozess", href: "/#how-we-work" },
  { name: "Blog", href: "/blog" },
  { name: "Preise", href: "/#pricing" },
  { name: "Kontakt", href: "/#book-a-call" },
] as const;

export default function HomeNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <StripedPattern className="pointer-events-none -z-50 h-10.5 w-full border-b border-dashed bg-background text-border" />
      <div className="absolute top-2 right-0 left-0 mx-auto flex h-16 max-w-3xl items-center justify-between rounded-xl bg-background/75 px-3 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Link
            aria-label="Home"
            className="flex h-9 items-center justify-center rounded-md bg-secondary px-2 transition-colors hover:bg-secondary/80"
            href="/"
          >
            <KeyonSolutionsIcon className="h-4.5 w-auto" />
          </Link>
          <Separator className="h-4 min-h-4" orientation="vertical" />
          <nav className="flex items-center gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href !== "/#how-we-work" && pathname.startsWith(item.href);

              return (
                <Link
                  className={cn(
                    "text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <Link
          className={buttonVariants({
            variant: pathname !== "/" ? "default" : "secondary",
          })}
          href="/#book-a-call"
        >
          Jetzt buchen
        </Link>
      </div>
    </div>
  );
}
