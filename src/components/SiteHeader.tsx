import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-atelierpro.png";
import { APK_URL, WHATSAPP_APK } from "@/lib/config";

const WHATSAPP = APK_URL || WHATSAPP_APK;

const links = [
  { to: "/", label: "Accueil" },
  { to: "/fonctionnalites", label: "Fonctionnalités" },
  { to: "/guide", label: "Guide" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-blanc/95 backdrop-blur">
      <div className="thread-top h-1" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1120px] items-center gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo AtelierPro" width={36} height={36} className="h-9 w-9" />
          <span className="font-display text-lg font-extrabold tracking-tight text-espresso">
            AtelierPro
          </span>
        </Link>

        <nav
          className="ml-auto hidden items-center gap-6 md:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-espresso/80 transition-colors hover:text-argile"
              activeProps={{ className: "text-argile" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-sauge px-4 py-3 text-sm font-bold text-blanc transition-transform hover:-translate-y-0.5"
          >
            Télécharger l'APK
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-espresso" />
          <span className="block h-0.5 w-6 bg-espresso" />
          <span className="block h-0.5 w-6 bg-espresso" />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-border px-6 pb-4 md:hidden"
          aria-label="Navigation mobile"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-espresso"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="mt-2 rounded-full bg-sauge px-4 py-3 text-center text-sm font-bold text-blanc"
          >
            Télécharger l'APK
          </a>
        </nav>
      )}
    </header>
  );
}
