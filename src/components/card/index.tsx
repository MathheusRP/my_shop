import styles from "./productCard.module.css"
import { ICard } from "@/types/products"

export const ProductCard = (product: ICard) => {

    return (
        <li className={styles.cardContainer}>
            <img src={product.image} alt={product.title} width="auto" height="auto" />
            {/* <img src="/image/gabinete2.png" alt="Computador" width="auto" height="auto" /> */}
            <div className={styles.productInfo}>
                <p className={styles.description}>{product.title}</p>
                <div className={styles.priceContainer}>
                    <p className={styles.oldPrice}>{product.price}</p>
                    <span className={styles.price}>
                        <p>{product.discount}% OFF</p>
                        <p>R$ {product.price - (product.price * product.discount / 100)}</p>
                    </span>

                </div>
            </div>
        </li>
    )
}