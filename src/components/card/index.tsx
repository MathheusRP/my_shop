import styles from "./productCard.module.css"
import { ICard } from "@/types/products"
import Image from "next/image"

export const ProductCard = (product: ICard) => {

    return (
        <li className={styles.cardContainer}>
            <Image src={product.image} alt={product.title} width={100} height={100} />
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