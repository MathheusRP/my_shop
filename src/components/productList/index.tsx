import styles from "./product.module.css"
import { ProductCard } from "../card"

export const ProductList = () => {

    return (
        <section className={styles.productListContainer}>
            <div className={styles.productListHeader}>
                <h2>Computadores Gamers</h2>

                <div className={styles.orderOptionsContainer}>
                    <span>Ordenar por</span>
                    <select name="order" id="order">
                        <option value="LowestValue">Menor Valor</option>
                        <option value="HighestValue">Maior Valor</option>
                    </select>
                </div>
            </div>
            <ul className={styles.list}>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </ul>
        </section>
    )
} 