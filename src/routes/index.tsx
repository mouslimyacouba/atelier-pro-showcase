import { createFileRoute, Link } from "@tanstack/react-router";
import { DownloadButton, DownloadSection } from "@/components/DownloadSection";
import { ScreenGallery } from "@/components/Screens";
import { Simulator } from "@/components/Simulator";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { ShareButton } from "@/components/ShareButton";
import commande from "@/assets/screens/commande.jpg";
import { WHATSAPP, APP_VERSION } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AtelierPro — L'atelier artisanal, organisé et traçable" },
      {
        name: "description",
        content:
          "Application mobile qui aide les artisans nigériens (couturiers, menuisiers, mécaniciens) à suivre commandes, fiches de mesures et paiements. Un projet de Zinder Digital.",
      },
      { property: "og:title", content: "AtelierPro — L'atelier artisanal, organisé et traçable" },
      {
        property: "og:description",
        content:
          "Sans papier, sans commande perdue : commandes, mesures et paiements suivis depuis un téléphone Android.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-ivoire">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-argile">
              Née à Zinder · en production
            </p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              La gestion simple pour les artisans
            </h1>
            <p className="mt-5 max-w-[58ch] text-lg text-encre/80">
              AtelierPro transforme le carnet, la mémoire et les bouts de papier d'un atelier
              artisanal en un suivi clair des commandes, des mesures et des paiements — pensé pour
              les couturiers, menuisiers, mécaniciens et artisans du Niger.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <DownloadButton />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="rounded-sm border-[1.5px] border-espresso px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-espresso hover:text-ivoire"
              >
                Demander une démo
              </a>
              <Link
                to="/fonctionnalites"
                className="px-3 py-3 text-sm font-semibold text-argile underline underline-offset-4"
              >
                Voir les fonctionnalités
              </Link>
              <ShareButton />
            </div>
            <p className="mt-3 font-mono text-xs text-encre/60">
              Version {APP_VERSION} · Android 7.0+ · application Flutter
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                ["Secteur visé", "≈ 1,2 million d'artisans au Niger"],
                ["Zone pilote", "Zinder"],
              ].map(([dt, dd]) => (
                <div key={dt} className="border-t-2 border-sable pt-3">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-argile">
                    {dt}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-espresso">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[280px]">
            <img
              src={commande}
              alt="Écran de commande AtelierPro : prix total 35 000 FCFA, acompte 15 000 FCFA, solde restant 20 000 FCFA"
              width={432}
              height={880}
              className="w-full rounded-xl border border-border shadow-[0_18px_40px_-24px_rgba(42,29,23,0.5)]"
            />
            <p className="mt-3 text-center font-mono text-xs text-encre/60">
              Capture réelle · données de démonstration
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEME */}
      <section className="border-b border-border bg-blanc">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              Le papier ne rappelle jamais un client en retard de paiement.
            </h2>
            <p className="mt-4 max-w-[60ch] text-encre/80">
              Au Niger, la plupart des artisans suivent leurs commandes de mémoire ou sur papier.
              Résultat : des commandes oubliées, des mesures égarées, et des paiements réglés en
              espèces ou via différents opérateurs mobile money sans aucun suivi centralisé. Cette
              gestion informelle limite la croissance de leur activité — et la rend économiquement
              invisible.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              ["Commandes perdues", "pas de suivi de statut, pas d'historique par client"],
              ["Mesures égarées", "reprises inutiles à chaque nouvelle commande"],
              ["Paiements dispersés", "espèces et mobile money jamais réconciliés"],
              ["Activité invisible", "aucun chiffre d'affaires exploitable dans le temps"],
            ].map(([t, d]) => (
              <li key={t} className="border-l-2 border-argile pl-4">
                <strong className="text-espresso">{t}</strong>{" "}
                <span className="text-encre/75">— {d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APERCU FONCTIONNALITES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h2 className="text-3xl font-bold">Ce que fait AtelierPro</h2>
          <p className="mt-3 max-w-[62ch] text-encre/80">
            Une application mobile centralisée qui suit chaque commande de sa création jusqu'à la
            livraison, avec un espace privé et sécurisé pour chaque atelier.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              [
                "Suivi des commandes",
                "Statut clair — en attente, en cours, terminée, livrée — et historique complet par client.",
              ],
              [
                "Fiches réutilisables",
                "Mesures, fiche véhicule ou fiche chantier : saisies une fois, réutilisées à chaque commande.",
              ],
              [
                "Paiements et solde",
                "L'acompte est enregistré, le solde se calcule seul, le reçu part sur WhatsApp.",
              ],
              [
                "Tableau de bord et rappels",
                "Chiffre d'affaires en temps réel et rappels avant chaque échéance.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="rounded-sm border border-border bg-blanc p-6">
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-encre/75">{d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/fonctionnalites"
            className="mt-8 inline-block font-semibold text-argile underline underline-offset-4"
          >
            Voir toutes les fonctionnalités →
          </Link>
        </div>
      </section>

      {/* CAPTURES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h2 className="text-3xl font-bold">L'application en images</h2>
          <p className="mt-3 max-w-[62ch] text-encre/80">
            Captures réelles de l'application Android, avec des données de démonstration (client
            fictif).
          </p>
          <ScreenGallery />
        </div>
      </section>

      {/* SIMULATEUR */}
      <section className="border-b border-border bg-sable/40">
        <Reveal>
          <div className="mx-auto max-w-[820px] px-6 py-16">
            <h2 className="text-3xl font-bold">Essayez le calcul du solde</h2>
            <p className="mt-3 text-encre/80">
              Entrez un prix et un acompte : AtelierPro calcule le solde restant, comme sur l'écran
              de commande.
            </p>
            <div className="mt-6">
              <Simulator />
            </div>
          </div>
        </Reveal>
      </section>

      <DownloadSection />

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[820px] px-6 py-16">
          <h2 className="text-3xl font-bold">Questions fréquentes</h2>
          <Faq />
        </div>
      </section>

      {/* METIERS */}
      <section className="border-b border-border bg-sable/40">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h2 className="text-3xl font-bold">Un seul atelier, plusieurs métiers</h2>
          <p className="mt-3 max-w-[62ch] text-encre/80">
            Le métier choisi par l'atelier adapte automatiquement les champs des fiches — mesures
            pour un couturier, fiche véhicule pour un mécanicien, et ainsi de suite.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              "Couture",
              "Menuiserie",
              "Mécanique",
              "Cordonnerie",
              "Maçonnerie",
              "Bijouterie",
              "Coiffure",
              "Autre",
            ].map((m) => (
              <li
                key={m}
                className="rounded-sm border border-espresso/25 bg-blanc px-4 py-2 text-sm font-medium text-espresso"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-[1120px] px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-ivoire">Vous gérez un atelier artisanal ?</h2>
          <p className="mx-auto mt-3 max-w-[55ch] text-ivoire/80">
            AtelierPro cherche ses premiers ateliers pilotes à Zinder. Écrivez sur WhatsApp pour une
            démonstration de l'application.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
            >
              Demander une démo
            </a>
            <Link
              to="/guide"
              className="rounded-sm border-[1.5px] border-ivoire px-6 py-3 text-sm font-semibold text-ivoire transition-colors hover:bg-ivoire hover:text-espresso"
            >
              Lire le guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
