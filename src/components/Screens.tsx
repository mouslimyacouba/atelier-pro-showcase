import { useEffect, useState } from "react";
import tableau from "@/assets/screens/tableau-de-bord.jpg";
import client from "@/assets/screens/fiche-client.jpg";
import commande from "@/assets/screens/commande.jpg";
import paiements from "@/assets/screens/paiements.jpg";
import calendrier from "@/assets/screens/calendrier.jpg";

export const screens = [
  {
    src: tableau,
    title: "Tableau de bord",
    text: "Commandes du jour, recettes du mois et solde à récupérer, en un coup d'œil.",
    alt: "Tableau de bord AtelierPro : commandes du jour, recettes du mois et solde à récupérer",
  },
  {
    src: client,
    title: "Fiche client",
    text: "Coordonnées, boutons Appeler et WhatsApp, situation financière du client.",
    alt: "Fiche client avec boutons Appeler et WhatsApp et situation financière",
  },
  {
    src: commande,
    title: "Commande et solde",
    text: "Prix total, acompte payé et solde restant en FCFA, statut modifiable.",
    alt: "Détail d'une commande : prix total, acompte payé et solde restant en FCFA",
  },
  {
    src: paiements,
    title: "Paiements",
    text: "Chaque paiement est listé avec son mode, sa date et son heure.",
    alt: "Liste des paiements d'une commande avec mode, date et heure",
  },
  {
    src: calendrier,
    title: "Calendrier des échéances",
    text: "Les livraisons prévues par jour, avec le reste à payer.",
    alt: "Calendrier des échéances de livraison par commande",
  },
];

export function ScreenGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const n = screens.length;
  useEffect(() => {
    if (open === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % n));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + n) % n));
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [open, n]);

  const cur = open !== null ? screens[open] : undefined;
  return (
    <>
      <ul className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4">
        {screens.map((s, i) => (
          <li key={s.title} className="w-[200px] shrink-0 snap-start">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Agrandir : ${s.title}`}
              className="group block w-full text-left"
            >
              <img
                src={s.src}
                alt={s.alt}
                width={432}
                height={880}
                loading="lazy"
                className="w-full rounded-lg border border-border shadow-[0_12px_30px_-20px_rgba(42,29,23,0.6)] transition-transform group-hover:-translate-y-1"
              />
              <p className="mt-2 text-sm font-semibold text-espresso">{s.title}</p>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && cur && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cur.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-[760px] flex-col items-center gap-4 sm:flex-row"
          >
            <img src={cur.src} alt={cur.alt} className="max-h-[78vh] w-auto rounded-lg" />
            <div className="text-ivoire">
              <p className="font-mono text-xs text-sable">
                {open + 1} / {n}
              </p>
              <h3 className="mt-1 text-xl font-bold">{cur.title}</h3>
              <p className="mt-2 text-sm text-ivoire/85">{cur.text}</p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setOpen((open - 1 + n) % n)}
                  className="rounded-sm border border-ivoire px-4 py-2 text-sm"
                >
                  ← Précédent
                </button>
                <button
                  type="button"
                  onClick={() => setOpen((open + 1) % n)}
                  className="rounded-sm border border-ivoire px-4 py-2 text-sm"
                >
                  Suivant →
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="rounded-sm bg-sauge px-4 py-2 text-sm font-semibold text-blanc"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
