import { useEffect, useState } from "react";
import { WHATSAPP } from "@/lib/config";

export function FloatingActions() {
  const [up, setUp] = useState(false);
  useEffect(() => {
    const on = () => setUp(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {up && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Remonter en haut de la page"
          className="h-11 w-11 rounded-full border border-border bg-blanc text-lg text-espresso shadow-md transition-transform hover:-translate-y-0.5"
        >
          ↑
        </button>
      )}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        className="rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        Écrire sur WhatsApp
      </a>
    </div>
  );
}
