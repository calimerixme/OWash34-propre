"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  ["/images/icons/terrasse.png", "Terrasses, allées & murets", "Retrouvez un extérieur net et agréable.", "Dès 3 € / m²"],
  ["/images/icons/muret.png", "Façades & clôtures", "Une méthode ajustée à chaque support.", "Sur devis"],
  ["/images/icons/bac.png", "Bacs roulants", "Lavage extérieur et désinfection.", "Dès 10 €"],
  ["/images/icons/auto.png", "Véhicules", "Voitures, utilitaires et véhicules de loisirs.", "Dès 25 €"],
  ["/images/icons/pierre.png", "Pierres tombales", "Un nettoyage soigné et respectueux.", "Sur devis"],
  ["/images/icons/divers.png", "Autres besoins sur mesure", "Une demande particulière ? Nous étudions votre projet.", "Étude gratuite"],
];

const steps = [
  ["01", "Votre demande", "Vous expliquez simplement votre besoin."],
  ["02", "Votre devis", "Nous étudions la surface, l'accès et l'état."],
  ["03", "Le rendez-vous", "Nous convenons d'un créneau pratique."],
  ["04", "Le résultat", "Vous retrouvez un extérieur propre."],
];

const faqs = [
  ["Le devis est-il gratuit ?", "Oui. Chaque demande fait l'objet d'une étude gratuite et sans engagement."],
  ["Comment le prix est-il calculé ?", "Le tarif dépend de la surface, de l'accès, du support et du niveau de salissure."],
  ["Intervenez-vous pendant mon absence ?", "C'est possible lorsque les conditions d'accès sont définies à l'avance."],
  ["Où intervenez-vous ?", "À Béziers et dans les communes proches. Contactez-nous pour confirmer votre secteur."],
];

const slides = [
  {
    type: "Terrasse",
    title: "Avant / après",
    caption: "Nettoyage de terrasse",
    image: "/images/terrasses/terrasse.png",
  },
  {
    type: "Bacs roulants",
    title: "Propreté au quotidien",
    caption: "Lavage et désinfection",
    image: "/images/bac/bac.png",
  },
  {
    type: "Véhicule",
    title: "Lavage extérieur",
    caption: "Nettoyage de véhicule",
    image: "/images/voiture/voiture-01.png",
  },
  {
    type: "Véhicule",
    title: "Lavage extérieur",
    caption: "Nettoyage de véhicule",
    image: "/images/voiture/voiture-02.png",
  },
];

const email = "contact@owash34.fr";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [slide, setSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [waterEffect, setWaterEffect] = useState<
    "idle" | "active" | "done"
  >("idle");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
  const playAnimation = () => {
    setWaterEffect("idle");

    setTimeout(() => {
      setWaterEffect("active");
    }, 100);

    setTimeout(() => {
      setWaterEffect("done");
    }, 21000);
  };

  // Première animation
  const first = window.setTimeout(playAnimation, 1000);

  // Puis toutes les 30 secondes
  const loop = window.setInterval(playAnimation, 10000);

  return () => {
    window.clearTimeout(first);
    window.clearInterval(loop);
  };
}, []);

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex(
          (current) =>
            current === null
              ? null
              : (current + slides.length - 1) % slides.length,
        );
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex(
          (current) =>
            current === null
              ? null
              : (current + 1) % slides.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  function sendQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      "Demande de devis O'Wash — " + String(form.get("service") || ""),
    );
    const body = encodeURIComponent(
      [
        "Bonjour O'Wash,",
        "",
        "Nom : " + String(form.get("name") || ""),
        "Téléphone : " + String(form.get("phone") || ""),
        "Commune : " + String(form.get("town") || ""),
        "Prestation : " + String(form.get("service") || ""),
        "",
        "Demande :",
        String(form.get("details") || ""),
      ].join("\n"),
    );

    setMessage("Votre messagerie s'ouvre avec la demande prête à être envoyée.");
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  }

  return (
    <main>
      <header>
        <div className="shell header">
          <a className="logo" href="#accueil" aria-label="O'Wash 34 accueil">
  <img
    src="/images/logo/logo-owash.png"
    alt="Logo O'Wash 34"
  />
</a>

          <button
            className="menu"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <i />
            <i />
            <i />
          </button>

          <nav className={open ? "open" : ""}>
            <a href="#prestations" onClick={() => setOpen(false)}>Prestations</a>
            <a href="#tarifs" onClick={() => setOpen(false)}>Tarifs</a>
            <a href="#realisations" onClick={() => setOpen(false)}>Réalisations</a>
            <a href="#zone" onClick={() => setOpen(false)}>Zone</a>
            <a className="nav-button" href="#contact" onClick={() => setOpen(false)}>
              Demander un devis
            </a>
          </nav>
        </div>
      </header>

      <section
        className={`hero water-${waterEffect}`}
        id="accueil"
      >
        <div
          className="hero-water-effect"
          aria-hidden="true"
        >
          <div className="water-droplets">
            {Array.from({ length: 34 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>

        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Nettoyage extérieur · Béziers & alentours</p>

            <div className="hero-title-reveal">
              <h1>
                Redonnez vie et couleur
                <em>à vos surfaces.</em>
              </h1>

              <span
                className="hero-dirt-film"
                aria-hidden="true"
              />
            </div>
            <p className="lead">
              O&apos;Wash prend soin de vos extérieurs avec une prestation claire,
              soignée et adaptée à chaque support.
            </p>
            <div className="actions">
              <a className="button primary" href="#contact">Obtenir mon devis gratuit</a>
              <a className="button quiet" href="#prestations">Découvrir les prestations ↓</a>
            </div>
            <p className="proof">
              Devis gratuit <span /> Sur rendez-vous <span /> Particuliers & professionnels
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-image">
              <img
                src="/images/hero/hero-owash.png"
                alt="O'Wash"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="shell">
          <b>Un extérieur propre, sans complication.</b>
          <p>
            Étude & devis gratuits <i /> Intervention sur rendez-vous <i /> Prix expliqués avant intervention
          </p>
        </div>
      </section>

      <section className="section pale" id="prestations">
        <div className="shell">
          <div className="title split">
            <div>
              <p className="eyebrow">Les prestations</p>
              <h2>Un service précis pour chaque extérieur.</h2>
            </div>
            <p>
              Du nettoyage régulier des bacs à la remise en état d&apos;une terrasse,
              chaque prestation est étudiée selon votre besoin.
            </p>
          </div>

          <div className="cards">
            {services.map(([icon, name, text, price]) => (
              <article key={name}>
                <span className="service-icon">
                  <img
                    src={icon}
                    alt={name}
                    className="service-icon-img"
                  />
                </span>

                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>

                <b>{price}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="promise">
        <div className="shell">
          <div>
            <p className="eyebrow">La promesse O&apos;Wash</p>
            <h2>Vous travaillez !<br />Nous travaillons pour vous.</h2>
          </div>
          <div>
            <p>
              Pendant votre journée, nous pouvons intervenir à votre domicile pour vos terrasses,
              murets ou bacs roulants. À votre retour, votre extérieur retrouve sa propreté.
            </p>
            <a href="#contact">Organiser une intervention →</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="title">
            <p className="eyebrow">Simple et transparent</p>
            <h2>Une demande claire, du premier message au résultat.</h2>
          </div>
          <ol className="steps">
            {steps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section prices" id="tarifs">
        <div className="shell prices-grid">
          <div>
            <p className="eyebrow">Tarifs indicatifs</p>
            <h2>Des prix lisibles.<br />Un devis ajusté.</h2>
            <p>
              Les prix peuvent varier selon la surface, l&apos;état, l&apos;accès et le niveau de salissure.
              Les prestations groupées sont possibles.
            </p>
            <a href="#contact">Demander une estimation →</a>
          </div>

          <div className="price-cards">
            <article className="dark">
              <small>Extérieurs</small>
              <h3>Terrasses, murets & allées</h3>
              <p>Dès <b>3 €</b><sup>/ m²</sup></p>
            </article>

            <article>
              <small>Véhicules</small>
              <h3>Lavage extérieur</h3>
              <p>Dès <b>25 €</b></p>
            </article>

            <article className="bins">
              <div>
                <h3>Bacs roulants</h3>
                <small>Lavage extérieur et désinfection</small>
              </div>
              <dl>
                <div><dt>120 L</dt><dd>10 €</dd></div>
                <div><dt>2 bacs 120 L</dt><dd>15 €</dd></div>
                <div><dt>360 L</dt><dd>25 €</dd></div>
                <div><dt>4 roues</dt><dd>40 €</dd></div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="section results" id="realisations">
        <div className="shell results-grid">
          <div>
            <p className="eyebrow">Des résultats visibles</p>
            <h2>Votre extérieur mérite de retrouver son éclat.</h2>
            <p>
              Les réalisations avant/après O&apos;Wash défileront ici. Nous privilégions les photos réelles de prestations, sans artifices.
            </p>
            <a className="button dark-button" href="#contact">Parler de votre projet</a>
          </div>

          <div className="carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {slides.map((item, index) => (
                <button
                  className={`carousel-slide slide-${index}`}
                  key={`${item.type}-${index}`}
                  type="button"
                  aria-label={`Agrandir : ${item.caption}`}
                  onClick={() => setLightboxIndex(index)}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)), url("${item.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span>{item.type}</span>
                  <strong>{item.title}</strong>
                  <small>{item.caption}</small>
                </button>
              ))}
            </div>

            <div className="carousel-controls">
              <button
                type="button"
                aria-label="Photo précédente"
                onClick={() => setSlide((slide + slides.length - 1) % slides.length)}
              >
                ←
              </button>
              <p>
                {String(slide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={() => setSlide((slide + 1) % slides.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie des réalisations"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxIndex(null);
            }
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Fermer la galerie"
            onClick={() => setLightboxIndex(null)}
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            aria-label="Photo précédente"
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex + slides.length - 1) % slides.length,
              )
            }
          >
            ←
          </button>

          <figure className="lightbox-content">
            <img
              src={slides[lightboxIndex].image}
              alt={slides[lightboxIndex].caption}
            />
            <figcaption>
              <strong>{slides[lightboxIndex].title}</strong>
              <span>{slides[lightboxIndex].caption}</span>
              <small>
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </small>
            </figcaption>
          </figure>

          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            aria-label="Photo suivante"
            onClick={() =>
              setLightboxIndex((lightboxIndex + 1) % slides.length)
            }
          >
            →
          </button>
        </div>
      )}

      <section className="section pale" id="zone">
        <div className="shell zone">
          <a
            className="map"
            href="https://www.google.com/maps/search/?api=1&query=Béziers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir la zone d'intervention sur Google Maps"
          >
            <div className="map-badge">
              📍 Voir sur Google Maps
            </div>
          </a>
          <div>
            <p className="eyebrow">Zone d&apos;intervention</p>
            <h2>Béziers et les communes alentours.</h2>
            <p>
              O&apos;Wash privilégie la proximité pour proposer des créneaux pratiques et un service réactif.
              Votre commune n&apos;apparaît pas ? Contactez-nous.
            </p>
            <div className="tags">
              <b>Béziers</b>
              <b>Communes proches</b>
              <b>Particuliers</b>
              <b>Professionnels</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq">
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Ce que vous souhaitez savoir, simplement.</h2>
          </div>
          <div>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Parlons de votre besoin</p>
            <h2>Votre devis gratuit commence ici.</h2>
            <p>
              Expliquez-nous simplement votre projet. Nous revenons vers vous avec les informations utiles pour organiser l&apos;intervention.
            </p>
            <a href={"mailto:" + email}>{email}</a>
            <small>Intervention sur rendez-vous · Paiement à réception des travaux</small>
          </div>

          <form onSubmit={sendQuote}>
            <div className="fields">
              <label>Nom<input name="name" required /></label>
              <label>Téléphone<input type="tel" name="phone" required /></label>
            </div>

            <div className="fields">
              <label>Commune<input name="town" required /></label>
              <label>
                Prestation
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Choisir</option>
                  <option>Terrasse, allée ou muret</option>
                  <option>Façade ou clôture</option>
                  <option>Bacs roulants</option>
                  <option>Véhicule</option>
                  <option>Autre besoin extérieur</option>
                </select>
              </label>
            </div>

            <label>
              Votre demande
              <textarea
                name="details"
                placeholder="Surface approximative, accès, disponibilité…"
                required
              />
            </label>

            <button className="button primary">Préparer ma demande de devis</button>
            <small>Le message est préparé dans votre messagerie avant envoi.</small>
            {message && <p className="sent">{message}</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="shell">
          <p>Nettoyage extérieur à Béziers et alentours.</p>
          <nav>
  <a href="#prestations">Prestations</a>
  <a href="#tarifs">Tarifs</a>
  <a href="#contact">Contact</a>
  <a href="/mentions-legales">Mentions légales</a>
  <a href="/politique-confidentialite">Confidentialité</a>
  <a href="/cgv">CGV</a>
</nav>
        </div>
        <div className="shell fine">
          © 2026 O&apos;Wash 34 · Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
