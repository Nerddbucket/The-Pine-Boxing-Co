import { useState } from 'react';
import { site } from '../config/site';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center border border-pines-white/30 font-display text-pines-white"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? 'X' : '☰'}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[73px] z-40 bg-pines-black/98 px-6 py-8"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-widest text-pines-white hover:text-pines-red"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.scheduling.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="acuity-embed-button mt-4 inline-flex justify-center bg-pines-red px-8 py-3 font-display text-lg tracking-wider text-pines-white no-underline"
            >
              {site.ctas.header.label}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
