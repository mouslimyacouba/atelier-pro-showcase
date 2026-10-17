import { useState } from "react";

const fcfa = (n: number) =>
  `${Math.round(n)
    .toLocaleString("fr-FR")
    .replace(/\u202f/g, " ")} FCFA`;
const toNum = (v: string) => Math.max(0, Number(v.replace(/\D/g, "")) || 0);

/** Simulateur pédagogique : même calcul que l'écran « Commande » (solde = prix − acomptes). */
export function Simulator() {
  const [prix, setPrix] = useState("35000");
  const [acompte, setAcompte] = useState("15000");
  const p = toNum(prix);
  const a = toNum(acompte);
  const trop = a > p;
  const solde = Math.max(p - a, 0);
  const pct = p > 0 ? Math.min((a / p) * 100, 100) : 0;
  const statut =
    p === 0
      ? "—"
      : trop
        ? "Acompte supérieur au prix"
        : solde === 0
          ? "Soldée"
          : "Solde à encaisser";

  const field = (label: string, value: string, set: (v: string) => void, id: string) => (
    <label htmlFor={id} className="block text-sm font-medium text-espresso">
      {label}
      <div className="mt-1 flex items-center rounded-sm border border-border bg-blanc focus-within:ring-2 focus-within:ring-argile">
        <input
          id={id}
          inputMode="numeric"
          value={value}
          onChange={(e) => set(e.target.value.replace(/\D/g, ""))}
          className="w-full bg-transparent px-3 py-2 font-mono outline-none"
        />
        <span className="pr-3 font-mono text-xs text-encre/60">FCFA</span>
      </div>
    </label>
  );

  return (
    <div className="simulator-card rounded-lg border border-border bg-espresso p-6 text-ivoire">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("Prix total de la commande", prix, setPrix, "sim-prix")}
        {field("Acompte reçu", acompte, setAcompte, "sim-acompte")}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[10000, 20000, 35000].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setPrix(String(v))}
            className="rounded-sm border border-espresso/25 px-3 py-1 text-xs font-medium text-espresso transition-colors hover:bg-espresso hover:text-ivoire"
          >
            Prix {fcfa(v)}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setAcompte(String(Math.round(p / 2)))}
          className="rounded-sm border border-espresso/25 px-3 py-1 text-xs font-medium text-espresso transition-colors hover:bg-espresso hover:text-ivoire"
        >
          Acompte 50 %
        </button>
        <button
          type="button"
          onClick={() => {
            setPrix("35000");
            setAcompte("15000");
          }}
          className="px-3 py-1 text-xs font-semibold text-argile underline underline-offset-4"
        >
          Réinitialiser
        </button>
      </div>
      <div
        className="mt-6 h-3 w-full overflow-hidden rounded-full bg-sable"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Part déjà payée"
      >
        <div className="h-full bg-sauge transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3" aria-live="polite">
        <div>
          <dt className="text-encre/60">Déjà payé</dt>
          <dd className="font-mono font-semibold text-espresso">{fcfa(Math.min(a, p))}</dd>
        </div>
        <div>
          <dt className="text-encre/60">Solde restant</dt>
          <dd className="font-mono text-lg font-semibold text-argile">{fcfa(solde)}</dd>
        </div>
        <div>
          <dt className="text-encre/60">État</dt>
          <dd className={`font-semibold ${trop ? "text-destructive" : "text-espresso"}`}>
            {statut}
          </dd>
        </div>
      </dl>
      <p className="mt-4 font-mono text-[0.7rem] text-encre/55">
        Simulation pédagogique du calcul du solde. La vérification d'un acompte trop élevé dans
        l'application est en cours de validation.
      </p>
    </div>
  );
}
