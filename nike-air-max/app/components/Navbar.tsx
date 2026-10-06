"use client";

import { useEffect, useState } from "react";
import type { NavLink } from "@/data/product";
import Logo from "./Logo";

interface NavbarProps {
  links: NavLink[];
}

const linkClass =
  "group relative inline-block py-1 text-base text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-accent hover:tracking-widest focus-visible:-translate-y-0.5 focus-visible:text-accent focus-visible:outline-none";

const underline = (
  <span
    aria-hidden="true"
    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
  />
);

export default function Navbar({ links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-30">
      {/* Mobile / tablet: logo + toggle */}
      <div className="relative flex items-center justify-between px-6 py-4 lg:hidden">
        <Logo className="pointer-events-none absolute left-1/2 h-6 w-14 -translate-x-1/2 text-white" />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span className={`h-0.5 w-6 rounded bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Primary"
        className={`absolute inset-x-0 top-full overflow-hidden bg-black/85 backdrop-blur-md transition-all duration-300 ease-out lg:hidden ${
          open ? "max-h-80 border-b border-white/10 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-4">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)} className={`${linkClass} w-full text-lg`} tabIndex={open ? 0 : -1}>
                {link.label}
                {underline}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop */}
      <nav aria-label="Primary" className="hidden pt-[25px] lg:block">
        <ul className="mx-[20rem] flex justify-around gap-x-6">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={linkClass}>
                {link.label}
                {underline}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
