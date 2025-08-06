import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
      </ul>
    </nav>
  );
}
