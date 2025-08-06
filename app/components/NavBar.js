// src/app/components/NavBar.js (or app/components/NavBar.js if no src)

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog/test-post">Sample Blog Post</Link></li>
      </ul>
    </nav>
  );
}
