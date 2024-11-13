import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MountainIcon } from "lucide-react";
import { ModeToggle } from "./dark-theme-switch";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-md font-semibold">Nkansah.</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="#intro"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Introduction
          </Link>
          <Link
            href="#skillset"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Skillset
          </Link>

          <Link
            href="#repos"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Portfolio
          </Link>
          <Link
            href="#ui/ux"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            UI/UX Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#contact">
            <Button>{"Let's Get In Touch"}</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
