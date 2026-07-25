export function SiteFooter() {
  return (
    <footer>
      <div className="shell">
        <p>Nettoyage extérieur à Béziers et alentours.</p>

        <nav aria-label="Navigation principale du pied de page">
          <a href="/#prestations">Prestations</a>
          <a href="/#tarifs">Tarifs</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>

      <div className="shell fine">
        <span>© 2026 O&apos;Wash 34 · Tous droits réservés.</span>

        <nav aria-label="Informations légales">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">
            Politique de confidentialité
          </a>
          <a href="/cgv">CGV</a>
        </nav>
      </div>
    </footer>
  );
}
