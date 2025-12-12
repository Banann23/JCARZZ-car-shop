import { useEffect } from "react";
import styles from "./ShopPage.module.css"
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

function ShopPage() {

    useEffect(() => {
        document.title = "Shop - JCARZZ";
    }, []);

    return (
        <>
            <div className={styles.shopContainer}>
                <div className={styles.shopTitle}> AVAILABLE CARS: </div>
                <div className={styles.shopProductsContainer}>
                    <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                    <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI" price="$4500" />
                    <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34" price="$25000" />
                    <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX" price="$15000" />
                    <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                    <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI" price="$4500" />
                    <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34" price="$25000" />
                    <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX" price="$15000" />
                    <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                    <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI" price="$4500" />
                    <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34" price="$25000" />
                    <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX" price="$15000" />
                    <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                    <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI" price="$4500" />
                    <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34" price="$25000" />
                    <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX" price="$15000" />
                    <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                    <ProductCard imageSrc="/car2.jpg" altText="Toyota Celica VI" price="$4500" />
                    <ProductCard imageSrc="/car3.jpg" altText="Nissan Skyline R34" price="$25000" />
                    <ProductCard imageSrc="/car4.jpg" altText="Toyota Chaser JZX" price="$15000" />
                    <ProductCard imageSrc="/car1.jpg" altText="Honda CRX Del Sol" price="$8000" />
                </div>
                <button className={styles.loadMoreButton}> Load More </button>
            </div>
        </>
    );
}

export default ShopPage;