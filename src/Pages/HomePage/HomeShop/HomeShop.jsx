import styles from './HomeShop.module.css';
import ProductCard from '../../../components/ProductCard/ProductCard.jsx';

function HomeShop() {
    return (
        <section className={styles.shopSection}>
            <div className={styles.shopSectionTitle}>SHOP.</div>
            <div className={styles.productContainer}>
                <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI" price="$4500" />
                <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34" price="$25000" />
                <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX" price="$15000" />
            </div>
            <div className={styles.browseMoreButton}>Browse More</div>
        </section>
    );
}

export default HomeShop;