import Link from "next/link";
import { posts } from "./lib/posts"; // Adjust path if needed

export default function BlogPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
