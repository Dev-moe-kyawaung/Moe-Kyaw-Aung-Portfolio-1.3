import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import styles from './Blog.module.css';

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      className={styles.blogCard}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`} className={styles.blogCardLink}>
        <div className={styles.blogImgWrap}>
          <img src={post.coverImage} alt={post.title} loading="lazy" />
        </div>
        <div className={styles.blogCardBody}>
          <div className={styles.blogTags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.blogTag}>{tag}</span>
            ))}
          </div>
          <h3 className={styles.blogCardTitle}>{post.title}</h3>
          <p className={styles.blogExcerpt}>{post.excerpt}</p>
          <div className={styles.blogMeta}>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.readTime}><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

