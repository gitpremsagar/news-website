import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex ">
        <li>
          <Link href={`/`}>item 1</Link>
        </li>
      </ul>
    </nav>
  );
}
