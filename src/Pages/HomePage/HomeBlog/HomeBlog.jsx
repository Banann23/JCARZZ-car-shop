import styles from './HomeBlog.module.css';
import BlogCard from './BlogCard/BlogCard.jsx';

function HomeBlog() {
    return (
        <div className={styles.blogSection}>
            <BlogCard date="3.12.2025, 13:42" title="Why 90s JDM Icons Are Still Dominating the Car Scene Today" />
            <BlogCard date="29.11.2025, 17:37" title="How to Buy Your First JDM Retro Car: A Beginner’s Guide" />
            <BlogCard date="27.11.2025, 9:12" title="Restoration vs. Preservation: The Best Way to Keep Your JDM Classic Alive" />
            <BlogCard date="24.11.2025, 12:23" title="Honda Legends: The Cars That Defined an Entire Generation" />
        </div>
    );
}

export default HomeBlog;