import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value;
    if (honeypot) return;

    setStatus('submitting');

    // Formspree: replace YOUR_FORM_ID with client's endpoint when ready
    const formId = import.meta.env.PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus('success');
      form.reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="mb-2 block font-display text-sm tracking-wider text-pines-white">
          NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-white/20 bg-pines-black px-4 py-3 text-pines-white outline-none focus:border-pines-red"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-display text-sm tracking-wider text-pines-white">
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-white/20 bg-pines-black px-4 py-3 text-pines-white outline-none focus:border-pines-red"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block font-display text-sm tracking-wider text-pines-white">
          PHONE (OPTIONAL)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full border border-white/20 bg-pines-black px-4 py-3 text-pines-white outline-none focus:border-pines-red"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-display text-sm tracking-wider text-pines-white">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-y border border-white/20 bg-pines-black px-4 py-3 text-pines-white outline-none focus:border-pines-red"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-pines-red px-8 py-3 font-display text-lg tracking-wider text-pines-white transition-colors hover:bg-red-700 disabled:opacity-60"
      >
        {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-pines-red" role="status">
          Thanks! We will get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-pines-red" role="alert">
          Something went wrong. Email us directly or try again.
        </p>
      )}
    </form>
  );
}
