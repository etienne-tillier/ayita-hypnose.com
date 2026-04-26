import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  const title = post.h1 || post.seo_title || post.slug;
  const description = post.meta_description || post.excerpt || "";
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card no-underline group">
      {post.cover?.file_url && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      <div className="blog-card-content">
        <h3 className="text-lg font-semibold text-deep-blue mb-2 line-clamp-2 group-hover:text-violet transition-colors" style={{ fontFamily: 'Source Serif 4, Georgia, serif', color: '#0d1f3c' }}>
          {title}
        </h3>
        {description && (
          <p className="text-sm text-text-body line-clamp-3 mb-3 opacity-80">{description}</p>
        )}
        <div className="flex items-center justify-between mt-auto">
          {date && (
            <span className="text-xs opacity-50">{date}</span>
          )}
          <span className="text-xs font-medium text-gold opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: '#c8a45a' }}>
            Lire &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
