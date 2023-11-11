import styles from "./optionsFilter.module.css"
import { useState } from "react"
import { filterComputer } from "@/data/filterOptions"
import { IFiltersList } from "@/types/products"

interface IFilterComputer {
    title: string
    options: string[]
}

export const OptionsFilter = ({ title, options }: IFilterComputer) => {

    const [filterStatus, setFilterStatus] = useState<string>('open')
    const setFilter = () => {
        if (filterStatus == "close") {
            setFilterStatus("open")
        } else {
            setFilterStatus("close")
        }
    }

    return (
        <section className={`${styles.optionsFilterContainer} ${filterStatus == "close" ? (styles.close) : ("")}`}>
            <div onClick={() => setFilter()} className={`${styles.title}`}>
                <h4>{title}</h4>
            </div>
            <ul>
                {
                    options.map((option, index) => {
                        return (
                            <li key={index}><p>{option}</p></li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export const DefalutFilter = ({ listFilter }: any) => {

    // console.log(listFilter)

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
        <section className={`${filterStatus == "filterClose" ? (styles.filterClose) : ("")} ${styles.filterContainer}`}>
            <section className={styles.filterSection}>
                <h4>Filter</h4>
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
                listFilter.map((filter: IFilterComputer, index: number) => {
                    return (
                        <OptionsFilter key={index} title={filter.title} options={filter.options} />
                    )
                })
            }
        </section>
    )
}