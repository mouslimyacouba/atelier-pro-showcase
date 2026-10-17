import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-atelierpro.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-espresso text-ivoire">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Logo AtelierPro"
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10"
          />
          <p className="mt-3 text-sm text-ivoire/80">
            AtelierPro est un projet de Zinder Digital, Zinder, Niger.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-sable">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-ivoire/85">
            <li>
              <a href="https://wa.me/22782199929" target="_blank" rel="noopener">
                WhatsApp — +227 82 19 99 29
              </a>
            </li>
            <li>
              <a href="mailto:mouslimyacouba16@gmail.com">mouslimyacouba16@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-sable">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-ivoire/85">
            <li>
              <a
                href="https://wa.me/22782199929?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20sur%20AtelierPro"
                target="_blank"
                rel="noopener"
              >
                Aide sur WhatsApp
              </a>
            </li>
            <li>Support rapide — 82 19 99 29</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-sable">Aller à</h4>
          <ul className="mt-3 space-y-2 text-sm text-ivoire/85">
            <li>
              <Link to="/fonctionnalites">Fonctionnalités</Link>
            </li>
            <li>
              <Link to="/guide">Guide d'utilisation</Link>
            </li>
            <li>
              <Link to="/a-propos">À propos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivoire/15 py-5 text-center text-xs text-ivoire/70">
        © 2026 Zinder Digital — AtelierPro
      </div>
    </footer>
  );
}
