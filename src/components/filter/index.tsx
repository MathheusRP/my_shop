import styles from "./optionsFilter.module.css"
import { useState } from "react"

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
                {/* <li><p>I7-9700E</p></li>
                <li><p>I7-9700F</p></li>
                <li><p>I7-9700KF</p></li>
                <li><p>I3-12100F</p></li>
                <li><p>I3-12100SF</p></li>
                <li><p>Ryzen 9 7900X</p></li>
                <li><p>Ryzen 7 7700X</p></li> */}
            </ul>
        </section>
    )
}