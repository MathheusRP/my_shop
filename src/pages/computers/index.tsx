import styles from "../../styles/computers.module.css"
import { useState, useEffect } from "react"
import { filterComputer } from "@/data/filterOptions"
import { ProductList } from "@/components/productList"
import { AllProductsList } from "@/data/products"
import { ICard } from "@/types/products"
import { IAllProductList } from "@/data/products"
import { DefalutFilter } from "@/components/filter"

import { useRouter } from "next/router"

const Computers = () => {
    const router = useRouter()

    const [listSelect, setListSelect] = useState<ICard[]>([])


    useEffect(() => {
        AllProductsList.filter((products: IAllProductList) => {
            if (products.type == "computers") {
                setListSelect(products.list)
            }
        })
    }, [])

    return (
        <main className={styles.mainContainer}>
            <DefalutFilter listFilter={filterComputer} />
            <section className={styles.listContainer}>
                <ProductList listSelect={listSelect} />
            </section>
        </main>
    )
}

export default Computers