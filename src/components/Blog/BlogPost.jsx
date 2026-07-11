import { useParams, Link } from 'react-router-dom';
import { Suspense, lazy, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts.js';
import styles from './Blog.module.css';

/**
 * ★ MDX WIRING ★
 * This dynamically imports src/content/blog/{slug}.mdx per post.
 * Requires @mdx-js/rollup (or @vitejs/plugin-react + vite-plugin-mdx)
 * configured in vite.config.js:
 *
 *   import mdx from '@mdx-js/rollup';
 *   export default { plugins: [react(), mdx()] };
 *
 * Each post needs a matching file, e.g.:
 *   src/content/blog/clean-architecture-android-2025.mdx
 *
 * Until MDX build tooling is wired into your Vite config, this component
 * gracefully falls back to rendering the post excerpt only, rather than
 * crashing on a missing import — see the try/catch-free lazy() fallback below.
 */
export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const MDXContent = useMemo(() => {
    if (!post) return null;
    return lazy(() =>
      import(`../../content/blog/${slug}.mdx`).catch(() => ({
        default: () => (
          <p className={styles.mdxFallback}>
            Full article content coming soon. In the meantime, here's the summary: {post.excerpt}
          </p>
        ),
      }))
    );
  }, [post, slug]);

  if (!post) {
    return (
      <div className="section">
        <p>Post not found.</p>
        <Link to="/#blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="section">
      <Link to="/#blog" className={styles.backLink}>
        <ArrowLeft size={16} /> Back to Blog
      </Link>

      <div className={styles.blogTags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.blogTag}>{tag}</span>
        ))}
      </div>

      <h1 className={styles.postTitle}>{post.title}</h1>
      <div className={styles.blogMeta}>
        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span className={styles.metaDivider}>·</span>
        <span>{post.readTime}</span>
      </div>

      <img src={post.coverImage} alt={post.title} className={styles.postCover} />

      <div className={styles.postBody}>
        <Suspense fallback={<p>Loading article...</p>}>
          <MDXContent />
        </Suspense>
      </div>
    </article>
  );
}

