

import NavBar from '../../components/NavBar';

export default function BlogPost({ params }) {
  return (
    <main className="p-6">
      <NavBar />
      <h1 className="text-2xl font-bold mt-4">Blog Post: {params.slug}</h1>
      <p>This is a dynamic route!</p>
    </main>
  );
}
