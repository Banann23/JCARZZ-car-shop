import styles from './HomeShop.module.css';
import ProductCard from './ProductCard/ProductCard.jsx';

function HomeShop() {
    return (
        <section className={styles.shopSection}>
            <div className={styles.shopSectionTitle}>SHOP.</div>
            <div className={styles.productContainer}>
                <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol (1996)" price="$8000" />
                <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI (1994)" price="$4500" />
                <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34 (1996)" price="$25000" />
                <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX (1992)" price="$15000" />
            </div>
            <div className={styles.browseMoreButton}>Browse More</div>
        </section>
    );
}

export default HomeShop;