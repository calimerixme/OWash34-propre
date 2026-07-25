import { LegalPage } from "../components/LegalPage";

const sections = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "Le site O'Wash est édité à titre provisoire par Alexandre Cerbino, entrepreneur individuel en cours de création.",
      "Adresse : 12 avenue des Jardins, 34500 Béziers. Téléphone : 06 12 34 56 78. E-mail : contact@owash34.fr.",
      "SIREN : 123 456 789. SIRET : 123 456 789 00012. Ces informations sont fictives et seront remplacées par les données définitives de l'entreprise.",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: [
      "Le site est hébergé par Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "Les textes, visuels, éléments graphiques, logos et contenus présents sur ce site sont protégés. Toute reproduction ou utilisation sans accord préalable est interdite.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "O'Wash s'efforce de diffuser des informations exactes et à jour. Les informations du site restent indicatives et ne remplacent pas un devis personnalisé.",
    ],
  },
  {
    title: "Données personnelles",
    paragraphs: [
      "Les informations transmises via le formulaire sont utilisées uniquement pour répondre à une demande de contact ou de devis. Elles ne sont pas vendues à des tiers.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Le site peut utiliser des cookies strictement nécessaires à son fonctionnement. Une information complémentaire sera ajoutée si des outils de mesure d'audience sont installés.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations du site"
      title="Mentions légales"
      introduction="Les informations présentées sur cette page sont fournies à titre provisoire, dans l'attente de la création définitive de l'entreprise O'Wash."
      sections={sections}
    />
  );
}
