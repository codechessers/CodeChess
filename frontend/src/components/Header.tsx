"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed left-1/2 top-8 z-50 mx-auto w-full max-w-6xl -translate-x-1/2 transform p-3">
      <div className="relative flex items-center justify-between rounded-full border-2 border-[#b2ff14]/50 bg-blue/60 px-4 py-4 backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center text-white text-2xl space-x-1"
        >
          <div>
            <span className="text-3xl font-bold text-[#b2ff14] ml-2">
              {"{CC}"}
            </span>
          </div>
          {/* <div className="font-bold text-3xl">
            Code<span className="text-[#b2ff14]">Chess</span>
          </div> */}
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="hidden space-x-6 md:flex">
            <NavLink href="/play">Play</NavLink>
            <NavLink href="/learn">Learn</NavLink>
            <NavLink href="/tournaments">Tournaments</NavLink>
            <NavLink href="/leaderboard">Leaderboard</NavLink>
            <NavLink href="/profile">Profile</NavLink>
          </nav>
        </div>

        <div className="flex items-center mr-2">
          <Button className="bg-[#b2ff14] hover:bg-[#9bd12e] text-black text-xl">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-200 transition-all duration-300 hover:text-[#b2ff14] text-xl"
    >
      {children}
    </Link>
  );
}

export default Header;
