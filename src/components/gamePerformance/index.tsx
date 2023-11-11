import styles from "./gamePerformance.module.css"
import Image from "next/image"

export const GamePerformance = () => {

    return (
        <section className={styles.gamePerformanceContainer}>
            <h4>PERFORMANCE NOS JOGOS</h4>
            <div className={styles.game}>
                <Image src="/image/GTA5.webp" alt="Capa de jogo" width={100} height={150}/>
                <div className={styles.gameInfo}>
                    <select name="games" id="gameList">
                        <option value="GTAV">GTA V</option>
                        <option value="residentEvil4Remake">Resident Evil 4 Remake</option>
                        <option value="Dota2">Dota 2</option>
                    </select>
                    <p>Low = 120fps</p>
                    <p>Max = 80fps</p>
                </div>
            </div>
        </section>
    )
}