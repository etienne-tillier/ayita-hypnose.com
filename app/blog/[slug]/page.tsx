import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug } from "@/lib/blog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 21600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article non trouvé" };
  return {
    title: post.seo_title || post.h1,
    description: post.meta_description || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  // Translation handling
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      if (typeof val === 'object' && val !== null && (val as Record<string, unknown>).slug === slug) {
        const t = val as Record<string, unknown>;
        displayH1 = (typeof t.h1 === 'string' ? t.h1 : displayH1);
        displayBody = (typeof t.body_md === 'string' ? t.body_md : displayBody);
        break;
      }
    }
  }
  const bodyMd = injectDofollowMarker(displayBody || "");

  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen" style={{ background: '#f5f3ef' }}>
      {/* Header */}
      <div className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3352)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity mb-6 no-underline" style={{ color: 'white' }}>
            &larr; Retour au blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Source Serif 4, Georgia, serif', lineHeight: 1.2 }}>
            {displayH1}
          </h1>
          {date && (
            <p className="text-sm opacity-60">{date}</p>
          )}
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Cover image */}
        {post.cover?.file_url && (
          <div className="mb-10 rounded-xl overflow-hidden" style={{ boxShadow: '0 8px 30px rgba(13,31,60,0.12)' }}>
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || displayH1}
              width={900}
              height={450}
              priority
              className="object-cover w-full"
            />
          </div>
        )}

        {/* Language switcher */}
        <div className="mb-8">
          <LanguageSwitcher post={post} currentSlug={slug} />
        </div>

        {/* Content */}
        <div className="rounded-xl p-8 md:p-12 prose" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)' }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ a: MarkdownLink }}
          >
            {bodyMd}
          </ReactMarkdown>
        </div>

        {/* Author block */}
        {post.author && (
          <div className="mt-10 p-6 rounded-xl flex items-center gap-5" style={{ background: 'white', boxShadow: '0 4px 24px rgba(13,31,60,0.08)', borderLeft: '4px solid #c8a45a' }}>
            {post.author.avatar_url && (
              <Image
                src={post.author.avatar_url}
                alt={post.author.name}
                width={72}
                height={72}
                className="rounded-full object-cover flex-shrink-0"
              />
            )}
            <div>
              <p className="font-bold text-base mb-1" style={{ color: '#0d1f3c', fontFamily: 'Source Serif 4, Georgia, serif' }}>
                {post.author.name}
              </p>
              {post.author.bio && (
                <p className="text-sm leading-relaxed opacity-70">{post.author.bio}</p>
              )}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-outline inline-flex">
            &larr; Retour au blog
          </Link>
        </div>
      </article>
    </div>
  );
}
