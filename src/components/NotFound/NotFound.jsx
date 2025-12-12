import styles from "./NotFound.module.css"

function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.notFoundTitle}>Error 404 - Page Not Found</h1>
            <h2 className={styles.notFoundSubtitle}>Please check the URL or return to the homepage.</h2>
        </div>
    );
}

export default NotFound;