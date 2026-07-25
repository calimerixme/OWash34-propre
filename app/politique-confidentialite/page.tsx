import { LegalPage } from "../components/LegalPage";

const sections = [
  {
    title: "Collecte des données",
    paragraphs: [
      "Lors d'une demande de devis, O'Wash peut collecter votre nom, votre numéro de téléphone, votre commune, votre adresse e-mail et les informations utiles à l'étude de votre besoin.",
    ],
  },
  {
    title: "Utilisation des données",
    paragraphs: [
      "Ces données servent exclusivement à répondre à votre demande, préparer un devis, organiser une intervention ou assurer le suivi de la relation client.",
    ],
  },
  {
    title: "Conservation",
    paragraphs: [
      "Les données sont conservées pendant la durée nécessaire au traitement de la demande et conformément aux obligations légales applicables.",
    ],
  },
  {
    title: "Droits des utilisateurs",
    paragraphs: [
      "Vous pouvez demander l'accès, la rectification ou la suppression de vos données, dans les conditions prévues par la réglementation applicable.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Pour toute question relative à vos données personnelles, contactez O'Wash à l'adresse : contact@owash34.fr.",
    ],
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Respect de vos données"
      title="Politique de confidentialité"
      introduction="O'Wash accorde une attention particulière à la confidentialité des informations transmises par ses clients et prospects."
      sections={sections}
    />
  );
}
