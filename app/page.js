

import NavBar from './components/NavBar';

export default function HomePage() {
  return (
    <main className="p-6">
      <NavBar />
      <h1 className="text-2xl font-bold mt-4">Welcome to My Blog</h1>
      <p>This is the homepage.</p>
    </main>
  );
}
