import styles from "./productCard.module.css"

export const ProductCard = () => {

    return (
        <li className={styles.cardContainer}>
            <img src="/image/gabinete2.png" alt="Computador" width="auto" height="auto" />
            <div className={styles.productInfo}>
                <p className={styles.description}>Computador Gamer, Intel i5-10400F, GeForce RTX 2060 Super 8GB, 16GB DDR4, SSD M.2 480GB</p>
                <div className={styles.priceContainer}>
                    <p className={styles.oldPrice}>R$ 4.000,00</p>
                    <span className={styles.price}>
                        <p>10% OFF</p>
                        <p>R$ 3.000,00</p>
                    </span>

                </div>
            </div>
        </li>
    )
}