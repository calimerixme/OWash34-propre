import { LegalPage } from "../components/LegalPage";

const sections = [
  {
    title: "Objet",
    paragraphs: [
      "Les présentes conditions générales de vente définissent le cadre des prestations de nettoyage extérieur proposées par O'Wash aux particuliers et aux professionnels.",
    ],
  },
  {
    title: "Prestations",
    paragraphs: [
      "Les prestations peuvent notamment concerner les terrasses, allées, murets, façades, clôtures, bacs roulants, véhicules et équipements extérieurs.",
    ],
  },
  {
    title: "Tarifs",
    paragraphs: [
      "Les tarifs affichés sur le site sont indicatifs. Le prix définitif dépend de la surface, de l'état du support, des conditions d'accès et de la prestation demandée.",
    ],
  },
  {
    title: "Devis",
    paragraphs: [
      "Un devis personnalisé est transmis avant intervention lorsque la nature ou le montant de la prestation le nécessite. Sa validation vaut acceptation des conditions de la prestation.",
    ],
  },
  {
    title: "Paiement",
    paragraphs: [
      "Le paiement est dû à réception des travaux, selon le moyen de paiement convenu avec le client. Les modalités définitives seront précisées sur les devis et factures.",
    ],
  },
  {
    title: "Annulation",
    paragraphs: [
      "Toute demande de report ou d'annulation doit être communiquée dès que possible. Les conditions applicables seront précisées avant la confirmation du rendez-vous.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "O'Wash adapte ses méthodes aux supports accessibles et aux informations communiquées par le client. Le client s'engage à signaler toute fragilité connue avant intervention.",
    ],
  },
  {
    title: "Droit applicable",
    paragraphs: [
      "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute démarche contentieuse.",
    ],
  },
];

export default function CgvPage() {
  return (
    <LegalPage
      eyebrow="Conditions de prestation"
      title="Conditions générales de vente"
      introduction="Ces conditions sont provisoires. Elles seront adaptées avec les informations légales définitives d'O'Wash avant le démarrage de l'activité."
      sections={sections}
    />
  );
}
