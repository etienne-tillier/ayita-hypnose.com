import Link from "next/link";

export const metadata = {
  title: "Témoignages - Ayita Hypnose | Retours d'expérience de nos patients",
  description:
    "Découvrez les témoignages de patients accompagnés par Ayita Hypnose. Arrêt du tabac, gestion du stress, confiance en soi : des résultats concrets et durables.",
};

const testimonials = [
  {
    name: "Sophie M.",
    age: "38 ans",
    location: "Lyon",
    topic: "Arrêt du tabac",
    text: "Après des années de tentatives infructueuses pour arrêter de fumer — patches, gommes, willpower... — j&apos;ai finalement trouvé la solution avec l&apos;hypnothérapie. En seulement 2 séances, l&apos;envie de fumer a complètement disparu. Aujourd&apos;hui, cela fait 8 mois que je n&apos;ai pas touché une cigarette et je me sens enfin libre. Mon entourage est impressionné par ce changement si rapide et définitif. Je respire mieux, je cours sans être essoufflée, et mon goût et mon odorat sont revenus. Un investissement précieux pour ma santé.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    age: "45 ans",
    location: "Paris",
    topic: "Gestion du stress",
    text: "Je souffrais de stress chronique lié à mon travail, au point d&apos;avoir des crises d&apos;anxiété presque quotidiennes. Mon médecin m&apos;avait prescrit des médicaments mais je voulais une approche plus naturelle. L&apos;hypnothérapie a été une révélation. En quelques séances, j&apos;ai appris à gérer mes émotions et à retrouver un calme que je n&apos;avais plus ressenti depuis des années. Mon médecin lui-même a été surpris de la amélioration de mon état. Je recommande vivement cette approche à toute personne souffre de stress excessif.",
    rating: 5,
  },
  {
    name: "Marie L.",
    age: "32 ans",
    location: "Bordeaux",
    topic: "Phobie des hauteurs",
    text: "Ma phobie des hauteurs était devenue un vrai handicap. Even the simple act of looking out a tall building window was causing me panic attacks. Pour mon travail, je devais经常 me rendre en haut des immeubles de bureaux et c&apos;était chaque fois une souffrance. L&apos;hypnothérapie m&apos;a permis de surmonter cette phobie en seulement 4 séances. Aujourd&apos;hui, je peux travailler sereinement au 20e étage et même monter sur des terraces en hauteur sans appréhension. Ça a vraiment changé ma vie professionnelle et personnelle.",
    rating: 5,
  },
  {
    name: "Jean-Pierre D.",
    age: "52 ans",
    location: "Nantes",
    topic: "Troubles du sommeil",
    text: "Depuis 5 ans, je souffrais d&apos;insomnies sévères. Je mettais souvent 2 à 3 heures à m&apos;endormir, je me réveillais plusieurs fois par nuit et je n&apos;arrivais jamais à retrouver un sommeil réparateur. J&apos;étais épuisé, irritable, et ma santé se dégradait. L&apos;hypnothérapie a été la première solution qui a vraiment fonctionné. En quelques semaines, j&apos;ai retrouvé un sommeil de qualité. Je m&apos;endors maintenant facilement et je fais des nuits complètes. Je me sens reposé et énergie pour la première fois depuis longtemps.",
    rating: 5,
  },
  {
    name: "Camille F.",
    age: "35 ans",
    location: "Strasbourg",
    topic: "Confiance en soi",
    text: "Manque de confiance en soi me bloquait dans de nombreux domaines de ma vie : relations sociales, évolution professionnelle, prise de parole en public. Je me dévalorisais constament et je n&apos;osais pas m&apos;affirmer. L&apos;hypnothérapie a été un vrai tournant. Elle m&apos;a aidée à identifier les origines de ce manque de confiance et à le transformer progressivement. Aujourd&apos;hui, je prends la parole lors de réunions, j&apos;ai lancé mon projet professionnel et mes proches me trouvent transformé. Je suis enfin moi-même.",
    rating: 5,
  },
  {
    name: "Patrick H.",
    age: "60 ans",
    location: "Toulouse",
    topic: "Arrêt du tabac",
    text: "À 60 ans, après 40 ans de tabagisme, je pensais quil était trop tard pour arrêter. Mon cardiologue m&apos;avait mis en garde contre les risques pour ma santé. J&apos;ai decide de tenter l&apos;hypnothérapie comme dernier recours. En 3 séances, sans effets secondaires, sans prise de poids, j&apos;ai arrêté net. Mes proches n&apos;en reviennent toujours pas. Mon souffle s&apos;est amélioré de façon significative et mon cardiologue a constaté une amélioration de ma fonction cardiaque. L&apos;hypnothérapie m&apos;a offert un nouveau départ à cet âge.",
    rating: 5,
  },
  {
    name: "Léa B.",
    age: "35 ans",
    location: "Strasbourg",
    topic: "Gestion de la douleur",
    text: "Je souffre de douleurs chroniques au dos depuis des années, suite d&apos;un accident. J&apos;avais tout essayé : physiothérapie, médicaments, acupuncture... sans résultat durable. L&apos;hypnothérapie a changé ma perception de la douleur. Je ne dis pas que la douleur a complètement disparu, mais j&apos;ai appris à la gérer différemment et à réduire significativement ma consommation d&apos;antalgiques. Ma qualité de vie s&apos;est nettement améliorée. Je suis reconnaissant envers cette approche, et je la recommande à tous ceux qui souffrent de douleurs chroniques.",
    rating: 5,
  },
  {
    name: "Marc T.",
    age: "41 ans",
    location: "Lille",
    topic: "Acquisition de phobie",
    text: "Je développais une phobie des araignées très invalidante. Même une petite araignée me provoquait des crises de panique avec hyperventilation. Je nettoyais ma maison plusieurs fois par semaine pour éviter toute rencontre. En seulement 3 séances d&apos;hypnothérapie, ma réaction face aux araignées a complètement changé. Aujourd&apos;hui, je reste calme et peux même en attraper une pour la remettre dehors. Je n&apos;aurais jamais cru cela possible avant d&apos;essayer cette méthode.",
    rating: 5,
  },
];

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      {/* Hero */}
      <div className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="hypno-circle hypno-circle-1" />
        <div className="hypno-circle hypno-circle-2" />
        <div className="container max-w-4xl relative z-2 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 164, 90, 0.15)', border: '1px solid rgba(200, 164, 90, 0.3)' }}>
            <span className="text-sm font-medium" style={{ color: '#c8a45a' }}>Retours d&apos;expérience</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Source Serif 4, Georgia, serif', lineHeight: 1.15 }}>
            Témoignages de nos patients
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Découvrez les histoires inspirantes de personnes qui ont transformé leur vie grâce à l&apos;hypnothérapie. Ces témoignages illustrent la puissance et la diversité des résultats obtenus.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 py-12">
        {/* Introduction text */}
        <div className="rounded-xl p-8 mb-12" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
          <p className="leading-relaxed mb-0" style={{ color: '#3d3d5c' }}>
            Chaque témoignage ci-dessous représente une personne réelle qui a décidé de faire confiance à l&apos;hypnothérapie pour opérer un changement significatif dans sa vie. Qu&apos;il s&apos;agisse de se libérer du tabac, de gérer un stress invalidant, de surmonter une phobie ou de retrouver confiance en elle, chaque parcours est unique et inspire. Nous remercions chaleureusement tous nos patients qui ont accepté de partager leur expérience pour aider d&apos;autres personnes à franchir le pas.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl p-8" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)', borderLeft: '4px solid #c8a45a' }}>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-lg">⭐</span>
                ))}
              </div>

              {/* Topic badge */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: '#e8f0ec', color: '#5b8a72' }}>
                {t.topic}
              </div>

              {/* Quote */}
              <p className="italic leading-relaxed mb-6" style={{ color: '#3d3d5c' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(13,31,60,0.08)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'linear-gradient(135deg, #c8a45a, #dfc07a)', color: '#0d1f3c' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#0d1f3c' }}>{t.name}</div>
                  <div className="text-xs opacity-50">{t.age} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-xl p-6 text-center" style={{ background: '#faf8f5', border: '1px solid rgba(13,31,60,0.06)' }}>
          <p className="text-sm opacity-60 max-w-2xl mx-auto mb-0">
            Les témoignages présentés sont des retours authentiques de patients ayant bénéficier d&apos;un accompagnement en hypnothérapie. Chaque parcours est unique et les résultats peuvent varier selon les individus et leur degré d&apos;implication dans le processus thérapeutique.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 py-12 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Vous souhaitez écrire votre propre témoignage ?
          </h2>
          <p className="mb-8 opacity-80 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            franchissez le pas et commencez votre parcours vers le mieux-être. Nous serions ravis de vous accompagner.
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
      </div>
    </div>
  );
}
