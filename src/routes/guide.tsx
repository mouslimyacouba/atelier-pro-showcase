import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { screens } from "@/components/Screens";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Guide d'utilisation — AtelierPro" },
      {
        name: "description",
        content:
          "Guide pas à pas d'AtelierPro : créer un atelier, enregistrer un client et ses mesures, créer une commande, envoyer le reçu WhatsApp et clôturer la livraison.",
      },
      { property: "og:title", content: "Guide d'utilisation — AtelierPro" },
      {
        property: "og:description",
        content: "Le parcours d'une commande, du premier rendez-vous à la livraison.",
      },
    ],
  }),
  component: GuidePage,
});

const steps = [
  {
    title: "Créer son atelier",
    body: "Après avoir installé l'APK, l'artisan se connecte (compte Google), nomme son atelier et choisit son métier. Ce choix adapte les champs proposés dans les fiches.",
  },
  {
    title: "Créer la fiche client",
    body: "Une nouvelle cliente arrive à l'atelier. L'artisan crée sa fiche avec son nom et son numéro de téléphone, puis enregistre ses mesures une seule fois — réutilisables pour toutes ses futures commandes.",
  },
  {
    title: "Créer la commande",
    body: "Il décrit le travail à réaliser, fixe le prix total, choisit la date de livraison et enregistre l'acompte reçu. AtelierPro calcule automatiquement le solde restant.",
  },
  {
    title: "Envoyer le reçu",
    body: "Le reçu de commande part directement au client sur WhatsApp, avec le détail de l'acompte, du solde restant et de la date de livraison prévue.",
  },
  {
    title: "Suivre l'avancement",
    body: "Au fil du travail, le statut de la commande passe de « en attente » à « en cours », puis « terminée ». Chaque paiement complémentaire est enregistré au fur et à mesure.",
  },
  {
    title: "Recevoir le rappel",
    body: "À l'approche de la date de livraison ou d'une échéance de paiement, un rappel automatique alerte l'artisan.",
  },
  {
    title: "Livrer et clôturer",
    body: "Une fois la commande livrée et le solde payé, le statut passe à « livrée ». L'historique complet reste accessible pour toute commande future de ce client.",
  },
];

const stepScreen: Record<number, number> = { 1: 1, 2: 2, 3: 3, 4: 4 };

function GuidePage() {
  const [cur, setCur] = useState(0);
  const step = steps[cur]!;
  const idx = stepScreen[cur];
  const shot = idx !== undefined ? screens[idx] : undefined;
  return (
    <>
      <section className="border-b border-border bg-blanc">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-argile">
            Guide d'utilisation
          </p>
          <h1 className="mt-4 text-4xl font-extrabold">Comment ça se passe, en pratique</h1>
          <p className="mt-4 max-w-[62ch] text-lg text-encre/80">
            Le parcours d'une commande, du premier rendez-vous à la livraison — l'exemple d'un
            couturier à Zinder. Le même déroulé s'applique à un menuisier, un mécanicien ou un
            maçon.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1000px] px-6 py-16">
          <div
            className="mb-6 h-2 w-full overflow-hidden rounded-full bg-sable"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-valuenow={cur + 1}
            aria-label="Progression du guide"
          >
            <div
              className="h-full bg-argile transition-all duration-500"
              style={{ width: `${((cur + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            <ol className="flex gap-2 overflow-x-auto md:flex-col" aria-label="Étapes">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setCur(i)}
                    aria-current={i === cur ? "step" : undefined}
                    className={`flex w-full items-center gap-3 rounded-sm border px-3 py-2 text-left text-sm font-medium whitespace-nowrap transition-colors md:whitespace-normal ${i === cur ? "border-espresso bg-espresso text-ivoire" : "border-border bg-blanc text-espresso hover:border-argile"}`}
                  >
                    <span className="font-mono text-xs">{i + 1}</span>
                    {s.title}
                  </button>
                </li>
              ))}
            </ol>
            <div className="grid items-start gap-6 sm:grid-cols-[1fr_200px]">
              <div>
                <p className="font-mono text-xs text-argile">
                  Étape {cur + 1} / {steps.length}
                </p>
                <h2 className="mt-1 text-2xl font-bold">{step.title}</h2>
                <p className="mt-3 text-encre/80">{step.body}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    disabled={cur === 0}
                    onClick={() => setCur(cur - 1)}
                    className="rounded-sm border-[1.5px] border-espresso px-5 py-2 text-sm font-semibold text-espresso disabled:opacity-40"
                  >
                    ← Précédent
                  </button>
                  <button
                    type="button"
                    disabled={cur === steps.length - 1}
                    onClick={() => setCur(cur + 1)}
                    className="min-h-12 rounded-full bg-sauge px-5 py-2 text-[15px] font-bold text-blanc disabled:opacity-40"
                  >
                    Suivant →
                  </button>
                </div>
              </div>
              {shot && (
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={432}
                  height={880}
                  className="w-[200px] rounded-lg border border-border"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sable/40">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h2 className="text-2xl font-bold">Bon à savoir</h2>
          <ul className="mt-4 space-y-3 text-encre/80">
            <li>
              • L'application fonctionne sur les téléphones Android à partir de la version 7.0.
            </li>
            <li>• Les données de chaque atelier sont privées et rattachées à son compte.</li>
            <li>
              • Les paiements mobile money se saisissent manuellement pour l'instant ; l'intégration
              automatique est prévue.
            </li>
            <li>
              • Une question ou un blocage ?{" "}
              <a
                className="font-semibold text-argile underline underline-offset-4"
                href="https://wa.me/22782199929?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20sur%20AtelierPro"
                target="_blank"
                rel="noopener"
              >
                Écrire sur WhatsApp
              </a>
              .
            </li>
          </ul>
          <Link
            to="/a-propos"
            className="mt-6 inline-block font-semibold text-argile underline underline-offset-4"
          >
            En savoir plus sur le projet →
          </Link>
        </div>
      </section>
    </>
  );
}
