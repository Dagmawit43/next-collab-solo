import { posts } from "../lib/posts";
import CommentForm from "../../components/CommentForm";

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6">{post.content}</p>
      <CommentForm />
    </div>
  );
}
