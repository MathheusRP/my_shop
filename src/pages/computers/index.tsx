import styles from "../../styles/computers.module.css"

const Computers = () => {

    return (
        <main className={styles.mainContainer}>
            <section className={styles.filterContainer}>
                <div className={styles.filterSection}>
                    <h4>Filtro</h4>
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
                </div>
            </section>
            <section className={styles.listContainer}>

            </section>
        </main>
    )
}

export default Computers