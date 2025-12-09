import styles from './FooterSection.module.css';

function FooterSection() {
    return (
        <section className={styles.footerSection}>
            <div className={styles.footerText}>© 2025 Hubert Banach. All rights reserved.</div>
        </section>
    );
}

export default FooterSection;