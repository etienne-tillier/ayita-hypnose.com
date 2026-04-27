import Link from "next/link";
import Image from "next/image";
import { getPublishedBlogPosts } from "@/lib/blog";

export const revalidate = 21600;

const benefits = [
  {
    icon: "🧠",
    title: "Technique naturelle et non invasive",
    description:
      "L'hypnothérapie est une méthode douce qui utilise la relaxation profonde et la concentration pour accéder à votre subconscient. Elle ne nécessite aucun médicament et agit en harmonie avec votre corps.",
    color: "#5b8a72",
    bg: "#e8f0ec",
  },
  {
    icon: "✨",
    title: "Résultats durables et rapides",
    description:
      "En quelques séances seulement, de nombreux patients constate des changements significatifs. L'hypnose thérapeutique s'attaque aux causes profondes des comportements pour des résultats qui durent.",
    color: "#6b5b95",
    bg: "#f0ecf5",
  },
  {
    icon: "💪",
    title: "Renforcement de la confiance en soi",
    description:
      "L'hypnothérapie permet de reprogrammer les schémas de pensée négatifs et de développer une image de soi positive. Vous récupérez le contrôle sur vos émotions et vos réactions.",
    color: "#c8a45a",
    bg: "#f5f0e8",
  },
  {
    icon: "🌿",
    title: "Approche personnalisées",
    description:
      "Chaque séance est adaptée à vos besoins spécifiques. Votre hypnothérapeute qualifié prend le temps de comprendre vos objectifs pour un accompagnement sur mesure et efficace.",
    color: "#5b8a72",
    bg: "#e8f0ec",
  },
];

const applications = [
  {
    title: "Arrêt du tabac",
    description:
      "L'hypnose pour l'arrêt du tabac est l'une des méthodes les plus efficaces pour se libérer définitivement de la cigarette. Elle supprime l'envie de nicotine en lavorant sur les réflexes et les habitudes inconscientes.",
    icon: "🚭",
    href: "/applications#tabac",
  },
  {
    title: "Gestion du stress et de l'anxiété",
    description:
      "Vous souffrez de stress chronique, d'anxiété ou de crises de panique ? L'hypnothérapie vous aide à retrouver un état de calme profond et à développer des mécanismes de relaxation durable.",
    icon: "😌",
    href: "/applications#stress",
  },
  {
    title: "Confiance et estime de soi",
    description:
      "Manque de confiance, timidité excessive, perfectionnisme paralysant... L'hypnose thérapeutique agit sur les blocages profonds pour vous permettre de vous épanouir pleinement.",
    icon: "💎",
    href: "/applications#confiance",
  },
  {
    title: "Phobies et traumatismes",
    description:
      "Phobies diverses, traumatismes anciens, souvenirs douloureux... L'hypnothérapie permet de désensibiliser ces expériences et de libérer les émotions bloquées.",
    icon: "🦋",
    href: "/applications#phobies",
  },
  {
    title: "Troubles du sommeil",
    description:
      "Insomnies, difficultés à s'endormir, réveils nocturnes... L'hypnose aide à reprogrammer votre rapport au sommeil pour des nuits paisibles et réparatrices.",
    icon: "🌙",
    href: "/applications#sommeil",
  },
];

const testimonials = [
  {
    name: "Sophie M.",
    text: "Après des années de tentatives infructueuses pour arrêter de fumer, l'hypnothérapie a été ma solution. En seulement 2 séances, l'envie de fumer a complètement disparu. Je respire enfin librement depuis 8 mois !",
    location: "Lyon",
  },
  {
    name: "Thomas R.",
    text: "Je souffrais de crises d'anxiété invalidantes au quotidien. Grâce à mon hypnothérapeute, j'ai retrouvé un calme que je n'avais plus ressenti depuis des années. Un accompagnement bienveillance et des résultats concrets.",
    location: "Paris",
  },
  {
    name: "Marie L.",
    text: "Les séances d'hypnose m'ont aidée à dépasser une phobie des hauteurs qui me limitait dans ma vie quotidienne. Je peux enfin profiter de mes déplacements professionnels sans appréhension. Merci !",
    location: "Bordeaux",
  },
  {
    name: "Jean-Pierre D.",
    text: "atteint de troubles du sommeil depuis plusieurs années, j'ai enfin retrouvé des nuits paisibles. L'hypnothérapie a changé ma vie. Je me sens reposé et énergie pour la première fois depuis longtemps.",
    location: "Nantes",
  },
];

const faqs = [
  {
    question: "Combien coûte une séance d'hypnothérapie ?",
    answer:
      "Le tarif d'une séance d'hypnothérapie varie généralement entre 60€ et 100€ selon les régions et l'expérience du praticien. La première séance, souvent plus longue (environ 1h30), peut être tarifée légèrement différemment. Certains praticiens proposent des forfaits pour un accompagnement complet.",
  },
  {
    question: "L'hypnothérapie est-elle remboursée par la Sécurité sociale ?",
    answer:
      "L'hypnothérapie n'est actuellement pas remboursée par la Sécurité sociale en France. Cependant, de nombreuses mutuelles santé proposent désormais des remboursements partiels ou totaux pour les séances d'hypnothérapie. Nous vous recommandons de vérifier auprès de votre complémentaire santé les conditions de prise en charge.",
  },
  {
    question: "L'hypnose est-elle vraiment efficace ? Comment ça marche ?",
    answer:
      "Oui, de nombreuses études scientifiques confirment l'efficacité de l'hypnothérapie pour diverses indications. Pendant une séance, vous atteignez un état de conscience modifiée,类似 à la phase entre l'éveil et le sommeil. Dans cet état, votre subconscient devient particulièrement réceptif aux suggestions positives qui permettent de modifier les schémas de pensée et les comportements automatiques.",
  },
  {
    question: "Est-ce que je vais perdre le contrôle pendant une séance ?",
    answer:
      "Non, contrairement aux idées reçues, l'hypnose n'est pas une forme de contrôle ou de manipulation. Vous restez pleinement conscient et maître de vous-même tout au long de la séance. Vous pouvez à tout moment interrompre la séance si vous le souhaitez. L'hypnose est simplement un état de relaxation profonde consentie.",
  },
  {
    question: "Combien de séances sont nécessaires pour voir des résultats ?",
    answer:
      "Le nombre de séances varie selon la nature du problème et la réactivité de chaque personne. Pour des problématiques simples comme l'arrêt du tabac, 2 à 3 séances suffisent souvent. Pour des problématiques plus profondes comme les traumatismes ou les phobies anciennes, un accompagnement de 5 à 10 séances peut être nécessaire. Votre hypnothérapeute établira un devis personnalisé lors du premier rendez-vous.",
  },
  {
    question: "Comment choisir un bon hypnothérapeute ?",
    answer:
      "Pour choisir un hypnothérapeute qualifié, vérifiez qu'il a suivi une formation certifiante reconnue. Many prakticians sont Issue de backgrounds thérapeutiques comme la psychologie ou la médecine. N'hésitez pas à lire les témoignages de clients et à consulter plusieurs praticiens pour trouver celui qui vous correspond le mieux. La relation de confiance entre le patient et le thérapeuthe est essentielle pour la réussite du traitement.",
  },
];

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(3, 0);
  const hasPosts = posts.length > 0;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content py-12 lg:py-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 164, 90, 0.15)', border: '1px solid rgba(200, 164, 90, 0.3)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#c8a45a' }} />
                <span className="text-sm font-medium" style={{ color: '#c8a45a' }}>Hypnothérapie professionnelle</span>
              </div>
              <h1 className="text-white font-bold mb-6" style={{ lineHeight: 1.15 }}>
                Découvrez les bienfaits de{" "}
                <span className="text-gradient-gold">l&apos;hypnothérapie</span> pour votre mieux-être
              </h1>
              <p className="text-lg mb-8 opacity-90" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '540px', lineHeight: 1.7 }}>
                L&apos;hypnose thérapeutique est une méthode douce et naturelle pour vaincre les addictions, gérer le stress, surmonter les phobies et retrouver confiance en vous. Un accompagnement personnalisé par des hypnothérapeutes qualifiés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Prendre rendez-vous
                </Link>
                <Link href="/guide-hypnotherapie" className="btn-secondary">
                  Découvrir l&apos;hypnothérapie
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold" style={{ color: '#c8a45a' }}>500+</div>
                  <div className="text-xs opacity-60">Patients accompagnés</div>
                </div>
                <div className="w-px h-10 opacity-20 bg-white" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold" style={{ color: '#c8a45a' }}>95%</div>
                  <div className="text-xs opacity-60">Taux de satisfaction</div>
                </div>
                <div className="w-px h-10 opacity-20 bg-white" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold" style={{ color: '#c8a45a' }}>10+</div>
                  <div className="text-xs opacity-60">Années d&apos;expérience</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <Image
                  src="/images/hero.jpeg"
                  alt="Séance d'hypnothérapie dans un espace de bien-être paisible"
                  width={700}
                  height={520}
                  className="object-cover w-full"
                  priority
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,31,60,0.2), transparent)' }} />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#e8f0ec' }}>
                    <span className="text-lg">🌿</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#0d1f3c' }}>Méthode naturelle</div>
                    <div className="text-xs opacity-60">Sans médicament</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────── */}
      <section className="section" style={{ background: '#faf8f5' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi choisir l&apos;hypnothérapie ?</h2>
            <p className="section-subtitle">
              L&apos;hypnose thérapeutique offre une approche naturelle et efficace pour transformer positivement votre vie. Découvrez les avantages qui font le succès de cette pratique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-card">
                <div className="benefit-icon" style={{ background: benefit.bg }}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#3d3d5c' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Des applications multiples pour votre santé</h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#3d3d5c' }}>
                L&apos;hypnothérapie s&apos;adresse à toutes les personnes souhaitant opérer un changement positif dans leur vie. Qu&apos;il s&apos;agisse de se libérer d&apos;une addiction, de gérer des émotions difficiles ou de dépasser des blocages, l&apos;hypnose thérapeutique offre des solutions personnalisées adaptées à chaque problématique.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#3d3d5c' }}>
                Notre cabinet accompagne nos patients dans de nombreux domaines : arrêt du tabac, gestion du stress et de l&apos;anxiété, phobies, traumatismes, confiance en soi, troubles du sommeil, gestion de la douleur, et bien plus encore. Chaque parcours est unique et bénéficie d&apos;un suivi personnalisé.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((app) => (
                  <Link key={app.href} href={app.href} className="flex items-start gap-3 p-4 rounded-xl transition-all no-underline" style={{ background: '#faf8f5', border: '1px solid rgba(13,31,60,0.06)' }}>
                    <span className="text-2xl flex-shrink-0 mt-0.5">{app.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>{app.title}</h4>
                      <p className="text-xs leading-relaxed opacity-70">{app.description.substring(0, 80)}...</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/applications" className="btn-outline">
                  Voir toutes les applications &rarr;
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 16px 50px rgba(13,31,60,0.15)' }}>
                <Image
                  src="/images/applications.jpeg"
                  alt="Séance d'hypnothérapie individuelle dans un cabinet professionnel"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full hypno-circle" style={{ borderColor: 'rgba(200,164,90,0.2)' }} />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full hypno-circle" style={{ borderColor: 'rgba(91,138,114,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Practitioners ─────────────────────────────────────── */}
      <section className="section" style={{ background: '#0d1f3c' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 16px 50px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/images/practitioners.jpeg"
                  alt="Cabinet d'hypnothérapie professionnel et apaisant"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c8a45a, #dfc07a)' }}>
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#0d1f3c' }}>Praticiens</div>
                    <div className="text-xs opacity-60">certifiés et expérimentés</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title" style={{ color: 'white' }}>Des hypnothérapeutes qualifiés à votre écoute</h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Nos hypnothérapeutes sont des professionnels formés et certifiés, engagés dans une démarche continue de perfectionnement. Ils vous accueillent dans un cadre bienveillant et sécurisant, propice à la détente et à l&apos;ouverture vers le changement.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                La première rencontre permet d&apos;écouter votre problématique, de répondre à vos questions et d&apos;établir ensemble un plan d&apos;accompagnement adapté. Nous croyons fermement que chaque personne dispose des ressources nécessaires pour opérer les changements qu&apos;elle désire, et notre rôle est de vous guider vers la découverte de ces capacités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/a-propos" className="btn-primary">
                  Découvrir notre approche
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="section" style={{ background: '#f5f3ef' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Ce que disent nos patients</h2>
            <p className="section-subtitle">
              Découvrez les témoignages de personnes qui ont transformé leur vie grâce à l&apos;hypnothérapie. Leurs histoires illustrent la puissance de cette approche.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="italic leading-relaxed mb-4" style={{ color: '#3d3d5c' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0d1f3c' }}>{t.name}</div>
                    <div className="text-xs opacity-50">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/temoignages" className="btn-outline">
              Voir tous les témoignages &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog ──────────────────────────────────────────────── */}
      {hasPosts && (
        <section className="section" style={{ background: 'white' }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Articles récents sur l&apos;hypnothérapie</h2>
              <p className="section-subtitle">
                Informez-vous sur les bienfaits de l&apos;hypnose thérapeutique, les techniques utilisées et les conseils pour améliorer votre bien-être au quotidien.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="blog-card no-underline group block">
                    {post.cover?.file_url && (
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={post.cover.file_url}
                          alt={post.cover.alt || post.h1}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="blog-card-content">
                      <h3 className="text-base font-semibold line-clamp-2 mb-2" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
                        {post.h1 || post.seo_title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-sm line-clamp-2 opacity-70">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="btn-outline">
                Accéder au blog &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#faf8f5' }}>
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Questions fréquentes sur l&apos;hypnothérapie</h2>
            <p className="section-subtitle">
              Tout ce que vous devez savoir avant de commencer un accompagnement en hypnothérapie. Des réponses concrètes aux interrogations les plus courantes.
            </p>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="flex-shrink-0 text-lg opacity-40">+</span>
                </div>
                <div className="faq-answer">
                  <p className="mb-0">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352, #243b55)' }}>
        <div className="container text-center">
          <div className="hypno-circle hypno-circle-1" style={{ right: '10%', top: '10%', borderColor: 'rgba(200,164,90,0.1)' }} />
          <div className="hypno-circle hypno-circle-2" style={{ left: '5%', bottom: '5%', borderColor: 'rgba(91,138,114,0.1)' }} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Prêt(e) à transformer votre vie ?
          </h2>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Prenez rendez-vous pour une première séance d&apos;hypnothérapie. Ensemble, accompagnons vers le changement que vous méritez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Réserver une séance
            </Link>
            <Link href="/guide-hypnotherapie" className="btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* ── Schema.org JSON-LD ────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "Ayita Hypnose",
            description:
              "Cabinet d'hypnothérapie professionnelle. Accompagnement pour l'arrêt du tabac, gestion du stress, confiance en soi, phobies et traumatismes.",
            url: "https://ayita-hypnose.com",
            telephone: "+33-6-00-00-00-00",
            email: "contact@ayita-hypnose.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "FR",
            },
            openingHours: "Mo-Fr 09:00-19:00",
            priceRange: "€€",
            image: "https://ayita-hypnose.com/images/hero.jpeg",
            sameAs: [],
          }),
        }}
      />
    </>
  );
}
