"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header>
      <div className="shell header">
        <a
          className="logo"
          href="/"
          aria-label="O'Wash 34 accueil"
        >
          <img
            src="/images/logo/logo-owash.png"
            alt="Logo O'Wash"
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
          <a
            href="/#prestations"
            onClick={closeMenu}
          >
            Prestations
          </a>

          <a
            href="/#tarifs"
            onClick={closeMenu}
          >
            Tarifs
          </a>

          <a
            href="/#realisations"
            onClick={closeMenu}
          >
            Réalisations
          </a>

          <a
            href="/#zone"
            onClick={closeMenu}
          >
            Zone
          </a>

          <a
            className="nav-button"
            href="/#contact"
            onClick={closeMenu}
          >
            Demander un devis
          </a>
        </nav>
      </div>
    </header>
  );
}
