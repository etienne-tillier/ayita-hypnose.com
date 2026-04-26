import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata = {
  title: "Blog - Articles sur l'hypnothérapie",
  description:
    "Découvrez nos articles sur l'hypnothérapie : techniques, bienfaits, conseils pour votre mieux-être. Informez-vous sur l'arrêt du tabac, la gestion du stress, la confiance en soi.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      {/* Header Banner */}
      <div className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Blog
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Articles et ressources sur l&apos;hypnothérapie, les techniques de bien-être et les conseils pour améliorer votre quotidien. Une source d&apos;information fiable pour comprendre et pratiquer l&apos;hypnose thérapeutique.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <div className="rounded-xl p-12 text-center" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
              Aucun article publié pour le moment.
            </h2>
            <p className="opacity-70 max-w-md mx-auto">
              Nos articles sur l&apos;hypnothérapie et le bien-être seront bientôt disponibles. N&apos;hésite pas à revenir nous voir ou à nous contacter directement pour toute question.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary inline-flex">
                Nous contacter
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
