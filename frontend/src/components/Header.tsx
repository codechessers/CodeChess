"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client"; // Import authClient
import SignoutButton from "@/components/signout-button"; // Import the existing SignoutButton component

export function Header() {
  const { data, isPending } = authClient.useSession(); // Use authClient.useSession instead of useAuth
  const user = data?.user; // Extract user from session data

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

        <div className="flex items-center mr-2 space-x-3">
          {isPending ? (
            // Show loading state
            <div className="h-10 w-24 bg-gray-700/50 animate-pulse rounded-md"></div>
          ) : user ? (
            // User is signed in - show profile and logout
            <div className="flex items-center space-x-3">
              <Link href="/profile">
                <div className="flex items-center space-x-2 bg-black/30 hover:bg-black/50 transition-colors px-3 py-2 rounded-full border border-[#b2ff14]/30">
                  {user.image ? (
                    <img 
                      src={user.image} 
                      alt={user.name || "User"} 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-[#b2ff14]/20 flex items-center justify-center text-[#b2ff14] font-bold">
                      {user.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <span className="text-gray-200 text-sm">{user.name}</span>
                </div>
              </Link>
              {/* Use the existing SignoutButton component */}
              <div className="bg-black/30 hover:bg-black/50 text-[#b2ff14] border border-[#b2ff14]/30 rounded-full overflow-hidden">
                <SignoutButton />
              </div>
            </div>
          ) : (
            // User is not signed in - show login button
            <Link href={"/sign-in"}>
              <Button className="bg-[#b2ff14] text-black text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_3px_#b2ff14] hover:bg-black hover:text-[#b2ff14]">
                Login
              </Button>
            </Link>
          )}
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
      className="text-gray-200 transition-all duration-300 hover:text-[#b2ff14] hover:scale-105 hover:drop-shadow-[0_0_3px_#b2ff14] text-xl"
    >
      {children}
    </Link>
  );
}

export default Header;
