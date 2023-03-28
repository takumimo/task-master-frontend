import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <>Home</>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <>Projects</>
          </Link>
        </li>
        <li>
          <Link href="/tasks">
            <>Tasks</>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
