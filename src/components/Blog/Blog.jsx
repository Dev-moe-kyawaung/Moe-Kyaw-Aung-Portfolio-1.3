import { blogPosts } from '../../data/blogPosts.js';
import { useLang } from '../../context/LangContext.jsx';
import BlogCard from './BlogCard.jsx';
import styles from './Blog.module.css';

export default function Blog() {
  const { t } = useLang();

  return (
    <section className="section" id="blog">
      <div className="s-label">Writing</div>
      <h2 className="s-title">{t('blogTitle')}</h2>
      <p className={styles.subtitle}>
        Technical notes from real Android development work — architecture decisions,
        production incidents, and lessons learned.
      </p>

      <div className={styles.blogGrid}>
        {blogPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
