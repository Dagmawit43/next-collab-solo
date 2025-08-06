import { posts } from "../lib/posts";

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}
