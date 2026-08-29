import Link from "next/link";
import Nav from "@/components/Nav";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, type Post } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

// Re-check Sanity for new/edited posts at most once every 30 seconds, so a
// post you publish in /studio shows up here without anyone redeploying.
export const revalidate = 30;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndexPage() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch<Post[]>(POSTS_QUERY);
  } catch {
    // Sanity isn't reachable yet (e.g. env vars not set, or CORS origin not
    // added) — fail soft with an empty list instead of crashing the page.
    posts = [];
  }

  return (
    <div className="sheet">
      <Nav />

      <div className="biblio">
        <div>(54) PUBLICATIONS</div>
        <div>(45) Notes on IP strategy &amp; analytics</div>
        <div>(73) Assignee: Patentio</div>
      </div>

      <section className="blog-index">
        <span className="inid">(57) ABSTRACT</span>
        <h1 className="blog-index-title">The Blog</h1>

        {posts.length === 0 ? (
          <p className="blog-empty">
            No posts published yet. Head to{" "}
            <a href="/studio">/studio</a> to write the first one.
          </p>
        ) : (
          <ol className="blog-list">
            {posts.map((post, i) => (
              <li key={post._id} className="blog-list-item">
                <span className="claim-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  {post.coverImage && (
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="blog-list-image-link"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={urlForImage(post.coverImage)
                          .width(800)
                          .height(420)
                          .fit("crop")
                          .url()}
                        alt={post.coverImage.alt || post.title}
                        className="blog-list-image"
                      />
                    </Link>
                  )}
                  <span className="blog-list-date">
                    {formatDate(post.publishedAt)}
                  </span>
                  <h2 className="blog-list-title">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="blog-list-excerpt">{post.excerpt}</p>
                  )}
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="blog-list-readmore"
                  >
                    Read full disclosure →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      <footer>
        <div>© 2026 PATENTIO</div>
        <div>ALL RIGHTS RESERVED · NO PROVISIONAL REQUIRED</div>
      </footer>
    </div>
  );
}
