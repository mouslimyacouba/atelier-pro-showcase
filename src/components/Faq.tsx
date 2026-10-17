import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items: [string, string][] = [
  [
    "Comment installer AtelierPro ?",
    "Téléchargez l'APK sur votre téléphone Android (7.0 ou plus), ouvrez-le et autorisez l'installation depuis cette source si Android le demande. Aucun passage par le Play Store n'est nécessaire.",
  ],
  [
    "Faut-il un compte ?",
    "Oui. L'application utilise une connexion Google. Chaque atelier a son propre espace de données, rattaché à son compte.",
  ],
  [
    "Les paiements mobile money sont-ils intégrés ?",
    "Pas encore. Les paiements (espèces ou autres) se saisissent manuellement depuis chaque commande ; l'intégration est prévue dans la feuille de route.",
  ],
  [
    "Est-ce que ça marche sans Internet ?",
    "Le comportement hors ligne est en cours de test. La connexion Google et l'envoi de messages WhatsApp nécessitent Internet par nature.",
  ],
  [
    "L'application est-elle gratuite ?",
    "Les fonctions de base sont prévues gratuites (modèle freemium). Les fonctions avancées feront l'objet d'un abonnement mensuel accessible.",
  ],
  [
    "Comment obtenir de l'aide ?",
    "Écrivez sur WhatsApp au +227 82 19 99 29 : le développeur répond directement.",
  ],
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="mt-6 w-full">
      {items.map(([q, a]) => (
        <AccordionItem key={q} value={q}>
          <AccordionTrigger className="text-left text-base font-semibold text-espresso">
            {q}
          </AccordionTrigger>
          <AccordionContent className="text-encre/80">{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
