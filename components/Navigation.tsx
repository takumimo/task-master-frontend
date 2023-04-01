import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <>Home</>
          </Link>
        </li>
        <li>
          <Link href="/add-task">
            <>Add Task</>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
