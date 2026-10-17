import { APK_URL, APP_VERSION, WHATSAPP_APK } from "@/lib/config";

export function DownloadButton({ className = "" }: { className?: string }) {
  const direct = APK_URL !== "";
  return (
    <a
      href={direct ? APK_URL : WHATSAPP_APK}
      target={direct ? undefined : "_blank"}
      rel="noopener"
      {...(direct ? { download: true } : {})}
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-sauge px-6 py-3 text-[15px] font-bold text-blanc transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {direct ? "Télécharger l'APK" : "Recevoir l'APK sur WhatsApp"}
    </a>
  );
}

export function DownloadSection() {
  return (
    <section id="telecharger" className="border-b border-border bg-blanc">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-argile">
            Installer AtelierPro
          </p>
          <h2 className="mt-3 text-3xl font-bold">L'application est disponible en APK</h2>
          <p className="mt-3 max-w-[56ch] text-encre/80">
            Version {APP_VERSION} · Android 7.0 et plus · installation directe, sans Play Store. La
            publication sur le Play Store figure dans la feuille de route.
          </p>
          <div className="mt-6">
            <DownloadButton />
          </div>
        </div>
        <ol className="space-y-3 text-sm text-encre/80">
          {[
            "Téléchargez le fichier APK sur votre téléphone Android.",
            "Ouvrez-le. Si Android le demande, autorisez l'installation depuis cette source.",
            "Lancez AtelierPro, connectez-vous (compte Google) et créez votre atelier.",
          ].map((t, i) => (
            <li key={t} className="flex gap-3 border-l-2 border-argile pl-4">
              <span className="font-mono text-argile">{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
