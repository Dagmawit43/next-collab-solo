export default function Footer() {
  return (
    <footer className=" text-center p-4 mt-10">
      <p className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </p>
    </footer>
  );
}
