import Link from "next/link";
import HomeNavbarNavigation from "@/components/home-navbar-navigation";
import { KeyonSolutionsIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HomeNavbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-15 min-h-15 border-b border-dashed bg-background">
      <div className="relative h-full w-full">
        <div className="absolute right-0 left-0 z-50 mx-auto flex h-full w-full max-w-3xl items-center justify-between border-x border-dashed bg-background px-3">
          <div className="flex items-center gap-3">
            <Link
              className="flex h-8 w-fit items-center justify-center rounded-md bg-muted px-2"
              href="/"
            >
              <KeyonSolutionsIcon className="h-4.5 w-auto" />
            </Link>
            <Separator className="max-h-4 min-h-4" orientation="vertical" />
            <HomeNavbarNavigation />
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="#book-a-meeting"
            >
              Jetzt buchen
            </Link>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white, white 1px, transparent 1px, transparent 4px)",
          }}
        />
      </div>
    </nav>
  );
}
