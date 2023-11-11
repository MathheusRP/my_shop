import styles from "./product.module.css"
import { ProductCard } from "../card"
import { ComputersList } from "@/data/products"
import { ICard } from "@/types/products"

import { useEffect } from "react"

export const ProductList = ({ listSelect }: any) => {

    // console.log(ComputersList)

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
                {
                    listSelect.map((product: ICard, index: number) => {
                        return (
                            <ProductCard key={index} {...product} />
                        )
                    })
                }


            </ul>
        </section>
    )
} 