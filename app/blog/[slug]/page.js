export default function BlogPost({ params }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Blog Post: {params.slug}</h1>
      <p>This is a dynamic route!</p>
    </main>
  );
}
