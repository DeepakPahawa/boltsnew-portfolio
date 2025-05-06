"use client";
import { useState } from "react";

export default function UploadPage() {
  const [resumeText, setResumeText] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!resumeText.trim()) {
      setStatus("Please paste your resume content.");
      return;
    }

    try {
      const res = await fetch("/api/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText }),
      });

      const data = await res.json();
      setStatus(data.message || "Resume uploaded successfully.");
    } catch (err) {
      console.error("Upload error:", err);
      setStatus("Failed to upload resume.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-2">Paste Your Resume Content</h1>
      <textarea
        rows={20}
        className="w-full border rounded p-2 text-sm"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume here..."
        required
      />
      <button
        type="submit"
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
      <p className="mt-2 text-green-600">{status}</p>
    </form>
  );
}
