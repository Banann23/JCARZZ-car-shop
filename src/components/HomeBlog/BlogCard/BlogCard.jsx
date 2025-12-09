import styles from './BlogCard.module.css';
import props from 'prop-types';

function BlogSection({ date, title }) {
    return (
        <div className={styles.blogCard}>
            <img className={styles.blogCardImage} src="/car1.jpg" alt="Blog Post" />
            <div className={styles.blogCardText}>
                <div className={styles.blogCardDate}> {date} </div>
                <div className={styles.blogCardTitle}> {title}</div>
                <a href="#" className={styles.blogCardReadMore}> Read More </a>
            </div>
        </div>
    );
}

BlogSection.propTypes = {
    date: props.string.isRequired,
    title: props.string.isRequired,
};

export default BlogSection;