import { notFound } from "next/navigation";
import { getPostsByCategory, getCategoryInfo } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const revalidate = 21600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  if (!category) return { title: "Catégorie non trouvée" };
  return {
    title: `${category.label} - Blog - Ayita Hypnose`,
    description: `Articles sur le thème ${category.label} : hypo thologie, bien-être, développement personnel.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  if (!category) return notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      <div className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="container max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(200, 164, 90, 0.15)', border: '1px solid rgba(200, 164, 90, 0.3)' }}>
            <span className="text-sm font-medium" style={{ color: '#c8a45a' }}>Catégorie</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            {category.label}
          </h1>
          {category.description && (
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Link href="/blog" className="text-sm opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#0d1f3c' }}>
            &larr; Retour au blog
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-xl p-12 text-center" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Aucun article publié pour le moment.
            </h2>
            <p className="opacity-70 max-w-md mx-auto">
              Aucun article n&apos;a été publié dans cette catégorie pour le moment. Revenez bientôt !
            </p>
            <div className="mt-6">
              <Link href="/blog" className="btn-outline inline-flex">
                Retour au blog
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
