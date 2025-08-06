"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-gray-100 p-4 flex space-x-4">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
