import { useState } from "react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">
        ✨ Thanks for Visiting!
      </h1>
      <p className="text-2xl text-white mb-8">
        I’d love to hear your feedback 👇
      </p>

      {!submitted ? (
        <form
          name="feedback"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-gray-900 shadow-lg rounded-2xl p-6 w-full max-w-md border border-yellow-400"
        >
          <input type="hidden" name="form-name" value="feedback" />

          <div className="mb-4">
            <label className="block text-white">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-lg bg-amber-100 text-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded-lg bg-amber-100 text-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Feedback</label>
            <textarea
              name="message"
              className="w-full p-2 rounded-lg bg-amber-100 text-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <p className="mt-4 text-green-400 text-lg font-medium">
          ✅ Thanks for your feedback!
        </p>
      )}
    </div>
  );
}
