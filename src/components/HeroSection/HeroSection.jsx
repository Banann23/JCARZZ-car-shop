import styles from './HeroSection.module.css';
import HomeNavbar from "../HomeNavbar/HomeNavbar.jsx";

function HeroSection() {
    return (
        <>
            <section className={styles.heroSection}>
                <HomeNavbar />
                <div className={styles.heroContent}>
                    <div className={styles.heroTitle}>JCARZZ.</div>
                    <div className={styles.heroSubtitle}> Trusted by JDM enthusiasts worldwide</div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;