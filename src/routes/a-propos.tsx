import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos d'AtelierPro et du développeur — Zinder Digital" },
      {
        name: "description",
        content:
          "AtelierPro : origine du projet, technologies (Flutter, Firebase), feuille de route et présentation de Mouslim Yacouba, développeur freelance à Zinder, Niger.",
      },
      { property: "og:title", content: "À propos d'AtelierPro et du développeur" },
      {
        property: "og:description",
        content:
          "Un projet né à Zinder, conçu et développé par Mouslim Yacouba sous la marque Zinder Digital.",
      },
    ],
  }),
  component: AProposPage,
});

const roadmap = [
  ["Mois 1–2", "Stabilisation technique et écrans manquants"],
  ["Mois 3", "Intégration du paiement mobile money"],
  ["Mois 4", "Lancement du pilote à Zinder (20 à 30 ateliers)"],
  ["Mois 6", "Bilan du pilote et ajustements terrain"],
  ["Mois 7", "Publication sur le Play Store"],
  ["Mois 8", "Tableau de bord agrégé pour partenaires institutionnels"],
  ["Mois 9", "Bilan complet et plan d'extension à d'autres villes"],
];

function AProposPage() {
  return (
    <>
      <section className="border-b border-border bg-blanc">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-argile">À propos</p>
          <h1 className="mt-4 text-4xl font-extrabold">AtelierPro, né d'un constat simple</h1>
          <p className="mt-4 max-w-[62ch] text-lg text-encre/80">
            Les outils de gestion existants sont pensés pour d'autres contextes — connexion stable,
            cartes bancaires — et ne correspondent pas à la réalité des artisans nigériens.
            AtelierPro est une application mobile native et légère, conçue pour des téléphones
            Android d'entrée de gamme, avec une interface simple en français.
          </p>
          <p className="mt-4 max-w-[62ch] text-encre/80">
            Le projet garantit transparence et pérennité au-delà d'un seul développeur.
            L'application est en production : une version APK release (1.0.0) est disponible, pour
            Android 7.0 et plus.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Statut", "En production · APK release 1.0.0"],
              ["Technique", "Flutter · Firebase"],
              ["Prochaine étape", "Paiement mobile money"],
            ].map(([dt, dd]) => (
              <div key={dt} className="border-t-2 border-sable pt-3">
                <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-argile">
                  {dt}
                </dt>
                <dd
                  className={`mt-1 text-sm font-semibold text-espresso ${dt === "Statut" ? "status-badge status-production" : ""}`}
                >
                  {dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Impact visé</h2>
            <p className="mt-3 max-w-[60ch] text-encre/80">
              Le secteur artisanal représente environ 1,2 million de personnes au Niger. En
              structurant les données d'une activité aujourd'hui informelle, AtelierPro rend visible
              une part de l'économie urbaine de Zinder : des artisans qui suivent précisément leurs
              commandes et revenus, un historique exploitable utile pour un futur accès au crédit,
              et une collectivité mieux informée sur son tissu artisanal.
            </p>
            <h2 className="mt-8 text-2xl font-bold">Modèle</h2>
            <p className="mt-3 max-w-[60ch] text-encre/80">
              Freemium : les fonctionnalités de base restent gratuites pour maximiser l'adoption
              dans un secteur à faibles marges, avec un abonnement mensuel accessible pour les
              fonctions avancées (paiements mobile money intégrés, rappels illimités, export de
              données).
            </p>
          </div>
          <div className="rounded-sm border border-border bg-blanc p-6">
            <h2 className="text-xl font-bold">Feuille de route (9 mois)</h2>
            <ul className="mt-4 space-y-3">
              {roadmap.map(([m, t]) => (
                <li
                  key={m}
                  className="flex gap-4 border-b border-dashed border-border pb-3 text-sm"
                >
                  <span className="w-24 shrink-0 font-mono text-argile">{m}</span>
                  <span className="text-encre/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-espresso">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 py-16 sm:grid-cols-[auto_1fr]">
          <div className="flex h-24 w-24 items-center justify-center rounded-sm border-2 border-sable font-display text-2xl font-extrabold text-sable">
            MY
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ivoire">Le développeur</h2>
            <p className="mt-3 max-w-[62ch] text-ivoire/85">
              <strong>Mouslim Yacouba</strong> — développeur freelance autodidacte, basé à Zinder,
              Niger. AtelierPro est conçu, développé et maintenu en solo, sous la marque{" "}
              <strong>Zinder Digital</strong>, avec pour objectif de construire des outils
              numériques adaptés au contexte nigérien et ouest-africain.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/22782199929"
                target="_blank"
                rel="noopener"
                className="rounded-sm bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
              >
                +227 82 19 99 29
              </a>
              <a
                href="mailto:mouslimyacouba16@gmail.com"
                className="rounded-sm border-[1.5px] border-ivoire px-5 py-2.5 text-sm font-semibold text-ivoire transition-colors hover:bg-ivoire hover:text-espresso"
              >
                mouslimyacouba16@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
