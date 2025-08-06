"use client"; // this makes the component client-side

import { useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !comment) return alert("Please fill in all fields");

    // For now, just show a thank you message on submit
    setSubmitted(true);
    setName("");
    setComment("");
  }

  if (submitted) {
    return <p className="text-green-600">Thanks for your comment!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md">
      <h3 className="text-xl mb-2">Leave a Comment</h3>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-2"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Your Comment"
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
