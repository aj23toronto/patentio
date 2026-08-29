import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import {
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
  type Post,
} from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 30;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<string[]>(POST_SLUGS_QUERY);
    return slugs.map((slug) => ({ slug }));
  } catch {
    // Sanity isn't reachable yet at build time — build with zero pre-rendered
    // posts; they'll render on first request once it is.
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={urlForImage(value).width(1200).fit("max").url()}
        alt={value.alt || ""}
        className="blog-post-image"
      />
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: Post | null = null;
  try {
    post = await client.fetch<Post | null>(POST_BY_SLUG_QUERY, {
      slug: params.slug,
    });
  } catch {
    post = null;
  }

  if (!post) notFound();

  return (
    <div className="sheet">
      <Nav />

      <div className="biblio">
        <div>(54) {post.title.toUpperCase()}</div>
        <div>(45) Published: {formatDate(post.publishedAt)}</div>
        <div>
          (73) Assignee: <a href="/blog">Back to Publications</a>
        </div>
      </div>

      <article className="blog-post">
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={urlForImage(post.coverImage).width(1400).fit("max").url()}
            alt={post.coverImage.alt || post.title}
            className="blog-post-cover"
          />
        )}
        <span className="inid">(57) ABSTRACT</span>
        <h1 className="blog-post-title">{post.title}</h1>
        {post.excerpt && <p className="blog-post-excerpt">{post.excerpt}</p>}

        <div className="blog-post-body">
          <PortableText value={post.body} components={components} />
        </div>
      </article>

      <footer>
        <div>© 2026 PATENTIO</div>
        <div>ALL RIGHTS RESERVED · NO PROVISIONAL REQUIRED</div>
      </footer>
    </div>
  );
}
