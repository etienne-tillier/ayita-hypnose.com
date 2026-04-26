import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "À propos - Ayita Hypnose | Notre philosophie et notre équipe",
  description:
    "Découvrez Ayita Hypnose : notre philosophie d'accompagnement, notre approche thérapeutique et notre engagement envers votre bien-être. Une équipe de hypnothérapeutes qualifiés à votre écoute.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      {/* Hero */}
      <div className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="container max-w-4xl relative z-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 164, 90, 0.15)', border: '1px solid rgba(200, 164, 90, 0.3)' }}>
                <span className="text-sm font-medium" style={{ color: '#c8a45a' }}>Notre histoire</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Source Serif 4, Georgia, serif', lineHeight: 1.15 }}>
                À propos d&apos;Ayita Hypnose
              </h1>
              <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                Nous accompagnons chaque personne vers son équilibre intérieur grâce à la puissance de l&apos;hypnothérapie. Un cabinet dédié à votre mieux-être, ancré dans une démarche d&apos;excellence et de bienveillance.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 16px 50px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/images/about.jpeg"
                  alt="Concept d'hypnothérapie - espace de bien-être apaisant"
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
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-xl p-8 md:p-12 prose" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>

          <h2>Notre philosophie</h2>
          <p>
            Chez Ayita Hypnose, nous croyons fermement que chaque être humain dispose en lui des ressources profondes nécessaires pour opérer les changements qu&apos;il désire. Notre rôle n&apos;est pas de vous soigner, mais de vous accompagner dans la découverte et l&apos;activation de ces ressources inexploitées. L&apos;hypnothérapie n&apos;est pas une baguette magique : c&apos;est un processus collaboratif où votre engagement et votre motivation sont les véritables agents du changement.
          </p>
          <p>
            Notre philosophie s&apos;appuie sur trois piliers fondamentaux. Le premier est le <strong>respect absolu de la personne</strong>, de son rythme, de ses limites et de sa vulnérabilité. Chaque séance est un espace sécurisant où vous pouvez vous exprimer sans judgment. Le deuxième pilier est l&apos;<strong>exigence professionnelle</strong> : nous investissons continuellement dans notre formation et notre pratique pour vous offrir un accompagnement de la plus haute qualité. Le troisième pilier est la <strong>bienveillance inconditionnelle</strong>, car nous savons que le changement commence par l&apos;acceptation de soi.
          </p>

          <h2>Notre approche thérapeutique</h2>
          <p>
            Notre cabinet pratique l&apos;hypnothérapie ericksonienne, une approche douce et respectueuse de la personne développée par Milton Erickson, psychiatre américain considéré comme l&apos;un des plus grands guérisseurs du XXe siècle. Cette méthode utilise la transe hypnotique non pas comme un état de sommeil ou de contrôle, mais comme un état naturelle de conscience modifiée où le subconscient devient particulièrement réceptif aux nouvelles suggestions et aux nouvelles perspectives.
          </p>
          <p>
            Nous adaptons systématiquement notre accompagnement à chaque patient. Lors de la première séance, nous prenons le temps de comprendre votre problématique, vos objectifs et vos attentes. Cette phase d&apos;entretien est essentielle pour établir une relation de confiance et concevoir un plan d&apos;accompagnement personnalisé. Nous ne pratiquons jamais de techniques agressives ou contraires à l&apos;éthique, et vous restez pleinement maître de vous-même tout au long du processus.
          </p>

          <h2>Notre engagement qualité</h2>
          <p>
            L&apos;engagement qualité chez Ayita Hypnose se manifeste à plusieurs niveaux. Nos praticiens ont suivi des formations certifiantes reconnues et maintiennent à jour leurs compétences par la formation continue. Nous utilisons du matériel et des protocoles respectant les standards professionnels les plus exigeants. Nous observons une éthique stricte de confidentialité : tout ce qui est partagé en séance reste strictement confidentiel.
          </p>
          <p>
            Nous pratiquons également la transparence sur nos tarifs et nos méthodes. Chaque devis est établi de manière personnalisée et sans engagement lors du premier rendez-vous gratuit. Nous croyons que l&apos;accès au mieux-être ne devrait pas être un luxe, et nous nous efforçons de proposer des tarifs accessibles tout en maintenant un niveau d&apos;excellence dans notre pratique.
          </p>

          <h2>Notre vision pour votre mieux-être</h2>
          <p>
            Notre vision est simple : faire de l&apos;hypnothérapie une ressource accessible et efficace pour toutes les personnes en quête de changement positif. Nous voyons chaque jour les transformations remarquables que cette pratique peut générer : des personnes qui retrouvent la liberté après des années d&apos;addiction au tabac, des individuals qui surmontent des phobies invalidantes, des individuals qui redécouvrent la confiance en eux qu&apos;ils avaient perdue.
          </p>
          <p>
            Ces transformations nous inspirent et nous animent dans notre pratique quotidienne. Nous sommes reconnaissants de la confiance que nos patients nous accordent, et nous nous engageons à honorer cette confiance par un accompagnement dévoué, compétent et bienveillant. Si vous êtes pret à faire le premier pas vers le changement, nous serions honorés de vous accompagner dans votre parcours.
          </p>

          {/* Values */}
          <h2>Nos valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-8">
            {[
              { title: "Bienveillance", desc: "Accueil sans jugement de chaque personne dans le respect de son parcours unique." },
              { title: "Excellence", desc: "Formation continue et protocoles rigoureux pour un accompagnement de qualité supérieure." },
              { title: "Confidentialité", desc: "Ethique stricte et respect absolu du secret professionnel à chaque étape." },
              { title: "Accessibilité", desc: "Tarification transparente et volonté de rendre l'hypnothérapie accessible au plus grand nombre." },
            ].map((val) => (
              <div key={val.title} className="p-5 rounded-xl" style={{ background: '#faf8f5', border: '1px solid rgba(13,31,60,0.06)' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>{val.title}</h4>
                <p className="text-sm leading-relaxed opacity-70 mb-0">{val.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Prêt(e) à commencer votre parcours ?
            </h3>
            <p className="text-sm mb-4 opacity-80" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Prenez rendez-vous pour une première séance d&apos;hypnothérapie. Le premier rendez-vous est offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Réserver une séance
              </Link>
              <Link href="/guide-hypnotherapie" className="btn-secondary">
                Découvrir l&apos;hypnothérapie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
