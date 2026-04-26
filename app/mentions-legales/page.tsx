export const metadata = {
  title: "Mentions légales - Ayita Hypnose",
  description: "Mentions légales du site ayita-hypnose.com - Cabinet d'hypnothérapie professionnelle.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      <div className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="container max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Mentions légales
          </h1>
        </div>
      </div>

      <div className="container max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-xl p-8 md:p-12 prose" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
          <h2>Éditeur du site</h2>
          <p>Le site ayita-hypnose.com est éditée par :</p>
          <p>
            <strong>Ayita Hypnose</strong><br />
            Cabinet d&apos;hypnothérapie professionnelle<br />
            France<br />
            Email : contact@ayita-hypnose.com
          </p>

          <h2>Directeur de publication</h2>
          <p>Le directeur de la publication est le représentant légal d&apos;Ayita Hypnose.</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu présent sur le site ayita-hypnose.com (textes, images, graphismes, logo, icônes, etc.) est protégé par le droit d&apos;auteur et le droit de propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable d&apos;Ayita Hypnose.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l&apos;un quelconque de ses éléments sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. L&apos;hypnothérapie ne remplace pas un avis médical professionnel. Les visiteurs du site sont seuls responsables de l&apos;utilisation qu&apos;ils font des informations disponibles sur le site.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant ce site, vous pouvez nous contacter à l&apos;adresse suivante : <a href="mailto:contact@ayita-hypnose.com">contact@ayita-hypnose.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
