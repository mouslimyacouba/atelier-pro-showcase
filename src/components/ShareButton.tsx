import { useState } from "react";

export function ShareButton() {
  const [done, setDone] = useState(false);
  async function share() {
    const url = window.location.origin;
    try {
      if (navigator.share)
        await navigator.share({
          title: "AtelierPro",
          text: "La gestion simple pour les artisans",
          url,
        });
      else {
        await navigator.clipboard.writeText(url);
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      }
    } catch {
      /* partage annulé */
    }
  }
  return (
    <button
      type="button"
      onClick={share}
      className="px-3 py-3 text-sm font-semibold text-espresso underline underline-offset-4"
    >
      {done ? "Lien copié ✓" : "Partager le site"}
    </button>
  );
}
