import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <main className="legal-page">
      <SiteHeader />

      <section className="legal-hero">
        <div className="shell legal-hero-content">
          <p className="eyebrow">{eyebrow}</p>

          <h1>{title}</h1>

          <p className="legal-introduction">
            {introduction}
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="shell legal-layout">
          <aside className="legal-note">
            <span>Information provisoire</span>

            <h2>Une page prête à être finalisée.</h2>

            <p>
              Les renseignements affichés sont fictifs.
              Ils devront être remplacés par les données
              définitives d&apos;O&apos;Wash avant la publication.
            </p>

            <a href="/#contact">
              Une question ?
            </a>
          </aside>

          <div className="legal-sections">
            {sections.map((section, index) => (
              <article key={section.title}>
                <span className="legal-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2>{section.title}</h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
