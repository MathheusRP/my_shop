import styles from "../../styles/computers.module.css"
import { useState } from "react"
import { OptionsFilter } from "@/components/filter"
import { filterComputer } from "@/data/filterOptions"
import { ProductList } from "@/components/productList"

const Computers = () => {
    const [priceMin, setPriceMin] = useState<string>("0")
    const [filterStatus, setFilterStatus] = useState<string>("filterOpen")

    const setStatusFilterFunction = () => {
        if (filterStatus == "filterClose") {
            setFilterStatus("filter")
            console.log("ok")
        } else {
            setFilterStatus("filterClose")
        }
    }

    return (
        <main className={styles.mainContainer}>
            <section className={`${filterStatus == "filterClose" ? (styles.filterClose) : ("")} ${styles.filterContainer}`}>
                <section className={styles.filterSection}>
                    <h4>Filtro</h4>
                    <button onClick={() => setStatusFilterFunction()} type="button">X</button>
                    <ul>
                        <li>
                            <p>Processador Intel</p>
                            <span>X</span>
                        </li>
                        <li>
                            <p>SSD 250GB</p>
                            <span>X</span>
                        </li>
                        <li>
                            <p>Ram 16GB</p>
                            <span>X</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.priceContainer}>
                    <h4>Preço</h4>
                    <div className={styles.minAndMaxPrice}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="priceMin">R$</label>
                            <input id="priceMin" type="number" />
                        </div>
                        <span></span>
                        <div className={styles.inputContainer}>
                            <label htmlFor="priceMin">R$</label>
                            <input id="priceMin" type="number" />
                        </div>
                    </div>
                </section>

                {
                    filterComputer.map((filter, index) => {
                        return (
                            <OptionsFilter key={index} title={filter.title} options={filter.options} />
                        )
                    })
                }

                {/* <OptionsFilter />
                <OptionsFilter /> */}
            </section>
            <section className={styles.listContainer}>
                <ProductList />

            </section>
        </main>
    )
}

export default Computers