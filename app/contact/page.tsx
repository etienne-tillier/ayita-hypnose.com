import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact - Ayita Hypnose | Prennez rendez-vous",
  description:
    "Contactez Ayita Hypnose pour prendre rendez-vous ou toute question sur l'hypnothérapie. Nous répondons à toutes vos interrogations dans les plus brefs délais.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      {/* Hero */}
      <div className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="hypno-circle hypno-circle-1" />
        <div className="hypno-circle hypno-circle-2" />
        <div className="container max-w-4xl relative z-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 164, 90, 0.15)', border: '1px solid rgba(200, 164, 90, 0.3)' }}>
                <span className="text-sm font-medium" style={{ color: '#c8a45a' }}>Contactez-nous</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Source Serif 4, Georgia, serif', lineHeight: 1.15 }}>
                Prennez rendez-vous ou posez vos questions
              </h1>
              <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                Nous sommes à votre écoute pour répondre à toutes vos questions sur l&apos;hypnothérapie, vous informer sur nos tarifs et planifier votre première séance dans les meilleures conditions.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 16px 50px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/images/contact.jpeg"
                  alt="Espace d'accueil chaleureux pour vos séances d'hypnothérapie"
                  width={550}
                  height={380}
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-6 py-12">
        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl p-8" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(200, 164, 90, 0.15), rgba(200, 164, 90, 0.05))' }}>
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Par email
            </h3>
            <p className="text-sm opacity-70 mb-4">
              Envoyez-nous un email pour toute question ou demande de rendez-vous. Nous répondons généralement sous 24 à 48 heures.
            </p>
            <a
              href="mailto:contact@ayita-hypnose.com"
              className="inline-flex items-center gap-2 font-semibold text-base hover:opacity-80 transition-opacity no-underline"
              style={{ color: '#c8a45a' }}
            >
              <span className="text-lg">✉️</span>
              contact@ayita-hypnose.com
            </a>
          </div>

          <div className="rounded-xl p-8" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(91, 138, 114, 0.15), rgba(91, 138, 114, 0.05))' }}>
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Disponibilités
            </h3>
            <p className="text-sm opacity-70 mb-4">
              Nous accueillons nos patients du lundi au vendredi, de 9h à 19h. Certains samedis matins disponibles sur rendez-vous.
            </p>
            <p className="text-sm font-medium" style={{ color: '#5b8a72' }}>
              Consultations sur rendez-vous uniquement
            </p>
          </div>
        </div>

        {/* Email contact section */}
        <div className="rounded-xl p-8 md:p-10 text-center" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #c8a45a, #dfc07a)' }}>
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#0d1f3c" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Écrivez-nous directement
          </h2>
          <p className="mb-8 max-w-xl mx-auto opacity-70 leading-relaxed">
            Le moyen le plus simple pour nous contacter est d&apos;envoyer un email. Copiez notre adresse ci-dessous et cliquez pour ouvrir votre boite de messagerie. Nous vous répondrons avec plaisir !
          </p>

          <div className="p-6 rounded-2xl mb-8 inline-block" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
            <a
              href="mailto:contact@ayita-hypnose.com?subject=Demande%20de%20renseignements%20-%20Ayita%20Hypnose&body=Bonjour%2C%0A%0AJe%20souhaiterais%20obtenir%20des%20renseignements%20sur%20vos%20s%C3%A9ances%20d%27hypnoth%C3%A9rapie.%0A%0AMerci%20de%20me%20tenir%20inform%C3%A9(e).%0A%0ACordialement%2C"
              className="text-2xl font-bold hover:opacity-90 transition-opacity no-underline"
              style={{ color: '#c8a45a' }}
            >
              contact@ayita-hypnose.com
            </a>
          </div>

          <p className="text-sm opacity-60 max-w-lg mx-auto">
            Nous vous répondrons dans les plus brefs délais, généralement sous 24 à 48 heures. Pour les demandes urgentes, n&apos;hésitez pas à le préciser dans votre objet.
          </p>
        </div>

        {/* What to expect */}
        <div className="mt-8 rounded-xl p-8" style={{ background: '#e8f0ec', border: '1px solid rgba(91, 138, 114, 0.15)' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Que peut-on attendre d&apos;une première séance ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "1", title: "Premier contact", desc: "Après votre email, nous convenons ensemble d&apos;un créneau pour un premier rendez-vous." },
              { step: "2", title: "Entretien initial", desc: "Cette séance gratuite permet d&apos;échanger sur votre problématique et de définir vos objectifs." },
              { step: "3", title: "Proposition", desc: "Nous vous présentons un plan d&apos;accompagnement personnalisé avec un devis transparent." },
              { step: "4", title: "Séances suivantes", desc: "Si vous le souhaitez, nous commençons alors le travail thérapeutique adapté." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: '#5b8a72', color: 'white' }}>
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0d1f3c' }}>{item.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/guide-hypnotherapie" className="btn-outline">
            Découvrir l&apos;hypnothérapie &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
