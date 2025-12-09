import styles from './ProductCard.module.css';
import props from 'prop-types';

function ProductCard({ imageSrc, altText, price }) {
    return (
        <div className={styles.productCard}>
            <img className={styles.productImage} src={imageSrc} alt={altText} />
            <div className={styles.productInfo}>
                <div className={styles.productTitle}> {altText} </div>
                <div className={styles.productPrice}> {price} </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    imageSrc: props.string.isRequired,
    altText: props.string.isRequired,
    price: props.string.isRequired,
};

export default ProductCard;