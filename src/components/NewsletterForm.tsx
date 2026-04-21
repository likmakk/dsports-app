"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NewsletterForm() {
  const [email, setEmail]     = useState("");
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!EMAIL_RE.test(email.trim())) {
      setError("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-md px-4 py-4">
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" className="shrink-0 mt-0.5 text-green-600" stroke="currentColor" strokeWidth="2">
          <circle cx="10" cy="10" r="9" />
          <path d="M6 10l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-sm font-medium text-green-800">
          Merci, votre adresse e-mail a bien été prise en compte.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3"
      aria-label="Inscription à la newsletter"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="nl-email">
          Adresse e-mail
        </label>
        <input
          id="nl-email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className={`w-full border-2 rounded-md px-4 py-3 text-sm outline-none transition-colors ${
            error ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#CC0000]"
          }`}
          autoComplete="email"
          aria-describedby={error ? "nl-error" : undefined}
          aria-invalid={Boolean(error)}
        />
        {error && (
          <p id="nl-error" role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#CC0000] text-white font-bold px-6 py-3 rounded-md hover:bg-[#7f0000] transition-colors text-sm"
      >
        Recevoir la newsletter
      </button>
    </form>
  );
}
