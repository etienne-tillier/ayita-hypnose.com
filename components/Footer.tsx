import Link from "next/link";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Applications", href: "/applications" },
    { label: "Guide de l'hypnothérapie", href: "/guide-hypnotherapie" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Blog", href: "/blog" },
  ],
  info: [
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c8a45a, #dfc07a)' }}>
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                  <circle cx="16" cy="16" r="13" stroke="#0d1f3c" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="16" r="8" stroke="#0d1f3c" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <circle cx="16" cy="16" r="3.5" fill="#0d1f3c" opacity="0.8"/>
                  <path d="M16 3 C20 8, 24 12, 16 16 C8 20, 12 24, 16 29" stroke="#0d1f3c" strokeWidth="1" fill="none" opacity="0.6"/>
                  <path d="M16 3 C12 8, 8 12, 16 16 C24 20, 20 24, 16 29" stroke="#0d1f3c" strokeWidth="1" fill="none" opacity="0.6"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
                Ayita Hypnose
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              Cabinet d&apos;hypnothérapie professionnelle. Accompagnement bienveillant pour votre mieux-être : arrêt du tabac, gestion du stress, confiance en soi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Informations
            </h4>
            <ul className="space-y-2">
              {footerLinks.info.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm opacity-90 mb-1">Besoin d&apos;aide ?</p>
              <a href="mailto:contact@ayita-hypnose.com" className="text-gold font-semibold text-sm hover:opacity-80 transition-opacity" style={{ color: '#c8a45a' }}>
                contact@ayita-hypnose.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            &copy; {year} Ayita Hypnose. Tous droits réservés.
          </p>
          <p className="text-sm opacity-60">
            L&apos;hypnothérapie ne remplace pas un avis médical professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}
