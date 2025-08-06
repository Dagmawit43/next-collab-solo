import Link from "next/link";
import { posts } from "./blog/lib/posts"; // or "./lib/posts" based on your structure

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
