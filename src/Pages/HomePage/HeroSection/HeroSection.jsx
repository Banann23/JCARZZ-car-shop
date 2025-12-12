import styles from './HeroSection.module.css';
import Navbar from "../../../components/Navbar/Navbar.jsx";

function HeroSection() {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroTitle}>JCARZZ.</div>
                    <div className={styles.heroSubtitle}> Trusted by JDM enthusiasts worldwide</div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;