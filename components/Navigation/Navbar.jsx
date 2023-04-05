import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false);
  return (
    <nav>
      <ul className="p-4 bg-gray-800 text-white">
        <li
          className="sm:hidden"
          onClick={() => setisMobileNavOpen(!isMobileNavOpen)}
        >
          <MenuIcon />
        </li>
        <div
          className={
            isMobileNavOpen
              ? `sm:flex sm:justify-evenly h-full sm:h-full`
              : `sm:flex sm:justify-evenly h-0 sm:h-full hidden`
          }
        >
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/`}>Sports</Link>
          </li>
          <li>
            <Link href={`/`}>Entertainment</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
