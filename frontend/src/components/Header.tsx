// import Link from 'next/link'

// const Header = () => {
//   return (
//     <nav className="fixed w-full z-50 backdrop-blur-lg bg-opacity-30 bg-transparent  p-3">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="text-4xl font-bold text-white hover:text-gray-200">
//             <span className='text-[#b2ff14]'>{'{CC}'}</span>
//           </Link>

//           <div className="flex space-x-4">
//             <Link
//               href="/play"
//               className="text-gray-200 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
//             >
//               Play
//             </Link>
//             <Link
//               href="/learn"
//               className="text-gray-200 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
//             >
//               Learn
//             </Link>
//             <Link
//               href="/profile"
//               className="text-gray-200 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
//             >
//               Profile
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Header
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed left-1/2 top-8 z-50 mx-auto w-full max-w-5xl -translate-x-1/2 transform p-3">
      <div className="relative flex items-center justify-between rounded-full border border-[#b2ff14]/30 bg-black/60 px-4 py-4 backdrop-blur-xl">
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

        {/* Absolute positioning for perfect centering */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="hidden space-x-6 md:flex">
            <NavLink href="/play">Play</NavLink>
            <NavLink href="/learn">Learn</NavLink>
            <NavLink href="/tournaments">Tournaments</NavLink>
            <NavLink href="/leaderboard">Leaderboard</NavLink>
            <NavLink href="/profile">Profile</NavLink>
          </nav>
        </div>

        {/* This div maintains the space taken by the logo */}
        <div className="flex items-center mr-2">
          <Button className="bg-[#b2ff14] text-black text-xl">Login</Button>
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
      className="text-gray-200 transition-all duration-300 hover:text-[#b2ff14]"
    >
      {children}
    </Link>
  );
}

export default Header;
