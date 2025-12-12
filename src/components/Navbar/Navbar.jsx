import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbarSection}>
            <ul className={styles.navbar}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    )
}

export default Navbar;