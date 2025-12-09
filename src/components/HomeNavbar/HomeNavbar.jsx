import styles from "./HomeNavbar.module.css"

function HomeNavbar() {
    return (
        <section className={styles.navbarSection}>
            <ul className={styles.navbar}>
                <li> <a href="#"> Home </a></li>
                <li> <a href="#"> Shop </a></li>
                <li> <a href="#"> About </a></li>
            </ul>
        </section>
    )
}

export default HomeNavbar;