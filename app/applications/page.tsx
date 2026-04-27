import Link from "next/link";

export const metadata = {
  title: "Applications de l'hypnothérapie - Ayita Hypnose",
  description:
    "Découvrez les nombreux domaines d'application de l'hypnothérapie : arrêt du tabac, gestion du stress, phobies, confiance en soi, troubles du sommeil, gestion de la douleur et plus encore.",
};

const applications = [
  {
    id: "tabac",
    title: "Arrêt du tabac",
    emoji: "🚭",
    description:
      "L'hypnothérapie pour l'arrêt du tabac est l'une des applications les plus recherchées et les plus efficaces. Elle s'attaque simultanément aux dimensions physique et psychologique de l'addiction à la nicotine.",
    fullText:
      "L'arrêt du tabac par l'hypnothérapie offre des résultats remarquables comparés aux méthodes classiques. Alors que les patches et gommes nicotiniques ne traitent que la dépendance physique, l'hypnose permet de reprogrammer les réflexes conditionnels (pause café, moment de stress) et de modifier la perception de la cigarette. En quelques séances, le fumeur retrouve une relation saine avec son corps et son souffle. Les études montrent un taux de réussite de 60 à 80% après 2 à 3 séances pour les personnes véritablement motivées. Les bénéfices sont immédiats : respiration facilitée, goût et odorat renforcés, peau plus éclatante, et surtout une liberté retrouvée.",
    benefits: ["Suppression de l'envie de nicotine", "Elimination des réflexes conditionnels", "Pas de prise de poids", "Résultats durables", "Sans effets secondaires"],
    color: "#5b8a72",
    bg: "#e8f0ec",
  },
  {
    id: "stress",
    title: "Gestion du stress et de l'anxiété",
    emoji: "😌",
    description:
      "Le stress chronique et l'anxiété generalized affectent des millions de personnes. L'hypnothérapie offre des outils concrets pour retrouver un état de calme profond et durable.",
    fullText:
      "Le stress est devenu le mal du siècle, affectant toutes les spheres de la vie : travail, relations, santé physique. L'hypnothérapie permet d'atteindre un état de relaxation profonde où le système nerveux parasympathique s'active naturellement, противодействуя aux effets du stress chronic. Les techniques de visualisation et de suggestion positive permettent de reprogrammer les réactions automatiques face aux situations stressantes. Contrairement aux médicaments, les effets de l'hypnose sont durables car ils s'attaquent aux causes profondes du stress, pas seulement aux symptômes. Les patients rapportent généralement une amélioration significative après 3 à 5 séances.",
    benefits: ["Reduction du niveau de stress global", "Meilleure gestion des émotions", "Amélioration de la qualité de vie", "Meilleur sommeil", "Renforcement du système immunitaire"],
    color: "#6b5b95",
    bg: "#f0ecf5",
  },
  {
    id: "confiance",
    title: "Confiance et estime de soi",
    emoji: "💎",
    description:
      "Le manque de confiance en soi peut constituer un frein majeur dans la vie personnelle et professionnelle. L'hypnothérapie permet de transformer en profondeur les schémas de pensée limitants.",
    fullText:
      "La confiance en soi n'est pas un trait fixe : c'est une compétence qui peut être développée à tout âge. L'hypnothérapie permet d'identifier et de transformer les souvenirs et expériences qui ont contribué à former une image de soi negative. En状態 de transe, le subconscient devient particulièrement réceptif aux nouvelles suggestions qui renforcent l'estime de soi. Le patient peut ainsi développer une vision plus juste et plus bienveillante de lui-même. Les changements se manifestent progressivement dans le comportement quotidien : prise de parole plus aisée, ability à s'affirmer, réduction du perfectionnisme paralysant. Cette transformation a un impact positif sur toutes les spheres de la vie.",
    benefits: ["Elimination des croyances limitantes", "Développement de l'affirmation de soi", "Réduction du perfectionnisme", "Meilleure gestion du regard des autres", "Épanouissement personnel et professionnel"],
    color: "#c8a45a",
    bg: "#f5f0e8",
  },
  {
    id: "phobies",
    title: "Phobies et traumatismes",
    emoji: "🦋",
    description:
      "Phobies, traumatismes anciens, souvenirs douloureux... L'hypnothérapie permet de désensibiliser ces expériences et de libérer les émotions bloquées en toute sécurité.",
    fullText:
      "Les phobies (araignées, hauteur, avion, foule, etc.) et les traumatismes（旧时, accidents, violences, deuils difficiles) génèrent une souffrance considérable et limitent fortement la vie quotidienne. L'hypnothérapie offre une approche particulièrement adaptée à ces problématiques car elle permet de revisiter les expériences douloureuses dans un état de sécurité intérieure, sans avoir à revivre traumatiquement l'événement. Le paciente ne perd jamais le contrôle et peut à tout moment interrompre la séance. Les techniques de désensibilisation permettent de réduire progressivement, puis d'éliminer la réaction de peur. Manyklients constatent des amélioration significatives dès la première séance.",
    benefits: ["Désensibilisation progressive", "Libération des émotions bloquées", "Pas de reviviscence traumatisante", "Résultats rapides et durables", "Sécurité absolue"],
    color: "#6b5b95",
    bg: "#f0ecf5",
  },
  {
    id: "sommeil",
    title: "Troubles du sommeil",
    emoji: "🌙",
    description:
      "Insomnies, difficultés à s'endormir, réveils nocturnes... L'hypnothérapie aide à reprogrammer votre rapport au sommeil pour des nuits paisibles et réparatrices.",
    fullText:
      "Les troubles du sommeil affectent la qualité de vie dans son ensemble : fatigue, irritability, difficultés de concentration, affaiblissement du système immunitaire. L'hypnothérapie agit sur les mécanismes psychologiques qui empêchent de dormir : pensées anxieuses au coucher, peur de ne pas s'endormir, cycle veille-sommeil perturbé. Les techniques de relaxation profonde et de visualisation guident le paciente vers un état de calme idéal pour l'endormissement. Beaucoup de pacientes décrivent une improvement immédiate de la qualité de leur sommeil dès les premières nuits suivant la séance. L'objectif est de rétablir un cycle de sommeil naturel et réparateur.",
    benefits: ["Facilitation de l'endormissement", "Réduction des réveils nocturnes", "Amélioration de la qualité du sommeil", "Routine de coucher apaisée", "Sensation de repos au réveil"],
    color: "#5b8a72",
    bg: "#e8f0ec",
  },
  {
    id: "douleur",
    title: "Gestion de la douleur",
    emoji: "💆",
    description:
      "L'hypnose est reconnue scientifiquement pour son efficacité dans la gestion de la douleur chronique et aigüe. Une approche complémentaire précieuse pour les personnes souffrantes.",
    fullText:
      "La recherche scientifique a largement documenté l'efficacité de l'hypnose dans la gestion de la douleur. Utilisée depuis des décennies en milieu hospitalier, elle permet de réduire significativamente la perception de la douleur et de diminuer la consommation d'antalgiques. L'hypnothérapie agit en modulant l'expérience douloureuse à son niveau central, dans le cerveau. Elle est particulièrement utile pour les douleurs chroniques (fibromyalgie, lombalgies, migraines), les douleurs liées aux procédures médicales (injections, soins dentaires), ou les douleurs post-opératoires. De nombreux hopitaux proposent désormais des séances d'hypnose pour leurs patients.",
    benefits: ["Réduction de la perception douloureuse", "Diminution des antalgiques nécessaires", "Amélioration du confort quotidien", "Approche non médicamenteuse", "Complémentaire aux traitements médicaux"],
    color: "#c8a45a",
    bg: "#f5f0e8",
  },
  {
    id: "alimentation",
    title: "Troubles du comportement alimentaire",
    emoji: "🥗",
    description:
      "L'hypnothérapie accompagne efficacement dans la gestion des troubles alimentaires en s'adressant aux dimensions psychologiques profondes de ces problématiques.",
    fullText:
      "Les troubles du comportement alimentaire (fringales, compulsion, binge eating, comportements alimentaires excessifs liés au stress) ont souvent des racines psychologiques profondes. L'hypnothérapie permet d'explorer ces mécanismes internes et de reprogrammer le rapport à l'alimentation. Elle aide àidentifier les émotions qui déclenchent les comportements alimentaires problématiques, à développer des stratégies de coping alternatives, et à renforcer la motivation pour un changement durable. Cette approche ne se substitue pas à un suivi médical ou psychiatrique spécialisé, mais peut y être associée de manière complémentaire pour optimiser les résultats.",
    benefits: ["Identification des déclencheurs émotionnels", "Développement de nouvelles stratégies alimentaires", "Amélioration de l'image corporelle", "Renforcement de la motivation", "Approche bienveillante et non culpabilisante"],
    color: "#5b8a72",
    bg: "#e8f0ec",
  },
  {
    id: "performances",
    title: "Amélioration des performances",
    emoji: "🎯",
    description:
      "L'hypnothérapie peut aussi être utilisée pour optimiser les performances dans divers domaines : sport, examens, prises de parole en public, créativité.",
    fullText:
      "L'état de transe hypnotique est un état de concentration optimale où les ressources du subconscient peuvent être mobilisées au service d'un objectif. De nombreux athlètes de haut niveau utilisent l'hypnose pour améliorer leurs performances, de même que des étudiants avant les examens, des dirigeants avant des presentations importantes, ou des artistes en quête de créativité. L'hypnothérapie permet de Programming mental pour la réussite, d'éliminer les pensées parasites, et de développer un état de confiance et de concentration proche de l'état de flow décrit par les psychologues du sport. C'est un outil puissant d'optimisation des performances dans tous les domaines.",
    benefits: ["Optimisation de la concentration", "Renforcement de la confiance en situation", "Gestion du trac et de l'anxiété de performance", "Développement de l'état de flow", "Préparation mentale efficace"],
    color: "#6b5b95",
    bg: "#f0ecf5",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      {/* Hero */}
      <div className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="hypno-circle hypno-circle-1" />
        <div className="hypno-circle hypno-circle-2" />
        <div className="container max-w-4xl relative z-2 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 164, 90, 0.15)', border: '1px solid rgba(200, 164, 90, 0.3)' }}>
            <span className="text-sm font-medium" style={{ color: '#c8a45a' }}>Domaines d&apos;application</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Source Serif 4, Georgia, serif', lineHeight: 1.15 }}>
            Les applications de l&apos;hypnothérapie
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            L&apos;hypnothérapie peut vous aider dans de nombreux domaines. Découvrez les principales applications de cette pratique thérapeutique puissante et naturelle.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="rounded-xl p-8 mb-12" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
          <p className="mb-0 leading-relaxed" style={{ color: '#3d3d5c' }}>
            L&apos;hypnothérapie est une approche thérapeutique remarkably versatile qui s&apos;adresse à toutes les personnes souhaitant opérer un changement positif dans leur vie. Qu&apos;il s&apos;agisse de se libérer d&apos;une addiction, de gérer des émotions difficultes ou de dépasser des blocages, elle offre des solutions adaptées à chaque problématique. Ci-dessous, vous trouverez les principaux domaines d&apos;application de l&apos;hypnothérapie, avec des explications détaillées et les bénéfices spécifiques à chaque accompagnement.
          </p>
        </div>

        {/* Applications */}
        {applications.map((app) => (
          <div key={app.id} id={app.id} className="rounded-xl p-8 mb-8" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl" style={{ background: app.bg }}>
                {app.emoji}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
                  {app.title}
                </h2>
                <p className="opacity-70 leading-relaxed mb-0">{app.description}</p>
              </div>
            </div>

            <p className="mb-6 leading-relaxed" style={{ color: '#3d3d5c' }}>
              {app.fullText}
            </p>

            <h3 className="text-base font-semibold mb-4" style={{ color: '#0d1f3c' }}>
              Bénéfices attendus :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {app.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="text-lg flex-shrink-0">✨</span>
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary inline-flex" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
              Réserver une séance pour {app.title.toLowerCase()}
            </Link>
          </div>
        ))}

        {/* CTA */}
        <div className="py-12 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Vous ne trouvez pas votre problématique ?
          </h2>
          <p className="mb-8 opacity-80 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            L&apos;hypnothérapie peut s&apos;adapter à de nombreuses autres problématiques. N&apos;hésitez pas à nous contacter pour discuter de votre situation spécifique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Nous contacter
            </Link>
            <Link href="/guide-hypnotherapie" className="btn-secondary">
              En savoir plus sur l&apos;hypnothérapie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
