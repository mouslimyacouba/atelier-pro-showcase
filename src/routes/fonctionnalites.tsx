import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/fonctionnalites")({
  head: () => ({
    meta: [
      { title: "Fonctionnalités clés — AtelierPro" },
      {
        name: "description",
        content:
          "Commandes suivies, fiches de mesures réutilisables, paiements avec solde automatique, reçus WhatsApp, rappels et tableau de bord : les fonctionnalités d'AtelierPro.",
      },
      { property: "og:title", content: "Fonctionnalités clés — AtelierPro" },
      {
        property: "og:description",
        content:
          "Tout ce que fait AtelierPro pour structurer un atelier artisanal : commandes, fiches, paiements, rappels.",
      },
    ],
  }),
  component: FonctionnalitesPage,
});

const features = [
  {
    title: "Gestion des commandes",
    body: "Chaque commande garde un statut clair — en attente, en cours, terminée, livrée — et reste rattachée à l'historique complet du client. Plus de commande oubliée au fond d'un carnet.",
  },
  {
    title: "Fiches de mesures numériques",
    body: "Chaque client a sa fiche : mesures pour un couturier, fiche véhicule pour un mécanicien, fiche chantier pour un maçon. Saisies une seule fois, réutilisées à chaque nouvelle commande.",
  },
  {
    title: "Suivi des paiements",
    body: "L'acompte reçu est enregistré et le solde restant se calcule automatiquement. Chaque paiement est daté et rattaché à sa commande.",
  },
  {
    title: "Reçu partagé sur WhatsApp",
    body: "Le reçu de commande part directement au client via WhatsApp, le canal déjà utilisé quotidiennement par les artisans et leurs clients.",
  },
  {
    title: "Rappels automatiques",
    body: "Un rappel alerte l'artisan avant chaque échéance de paiement ou date de livraison, pour éviter les retards et les relances oubliées.",
  },
  {
    title: "Tableau de bord",
    body: "Chiffre d'affaires du mois, commandes en cours, livraisons imminentes et clients enregistrés : l'activité de l'atelier en un coup d'œil.",
  },
  {
    title: "Calendrier des échéances",
    body: "Les livraisons prévues s'affichent dans un calendrier mensuel, avec le reste à payer de chaque commande.",
  },
  {
    title: "Historique des modifications",
    body: "Chaque changement important, comme un changement de statut, est daté et consultable depuis l'historique des commandes.",
  },
  {
    title: "Stock de matériel",
    body: "Tissus, fils et fournitures se suivent avec une quantité, une unité et un seuil d'alerte de stock faible.",
  },
  {
    title: "Espace privé et sécurisé",
    body: "Chaque atelier dispose de son propre compte et de son espace de données isolé. Les informations d'un atelier ne sont jamais visibles par un autre.",
  },
  {
    title: "Pensé pour le terrain",
    body: "Application Android native et légère, testée dès Android 7.0, interface simple en français, sans compétences numériques avancées requises.",
  },
];

function FonctionnalitesPage() {
  return (
    <>
      <section className="border-b border-border bg-blanc">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-argile">
            Fonctionnalités clés
          </p>
          <h1 className="mt-4 text-4xl font-extrabold">Ce que fait AtelierPro</h1>
          <p className="mt-4 max-w-[62ch] text-lg text-encre/80">
            AtelierPro suit chaque commande de sa création jusqu'à la livraison, avec un
            enregistrement systématique de chaque paiement reçu. Moins de commandes perdues, des
            mesures fiables, et une activité enfin dotée d'un historique exploitable.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <ol className="grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <li
                key={f.title}
                className="group rounded-lg border border-border bg-blanc p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D5E3FF] font-mono text-xs font-bold text-[#0F3460]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-xl font-bold">{f.title}</h2>
                <p className="mt-2 text-sm text-encre/75">{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-sable/40">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h2 className="text-2xl font-bold">Prochaine étape</h2>
          <p className="mt-3 max-w-[62ch] text-encre/80">
            L'intégration du paiement mobile money nigérien (Airtel Money, Moov Flooz, Wave, Zamani
            Cash) est prévue. Pour l'instant, les paiements se saisissent manuellement depuis chaque
            commande.
          </p>
          <Link
            to="/guide"
            className="mt-6 inline-block font-semibold text-argile underline underline-offset-4"
          >
            Voir le guide d'utilisation →
          </Link>
        </div>
      </section>
    </>
  );
}
