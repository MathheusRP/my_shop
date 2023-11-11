import styles from "@/styles/productPage.module.css"
import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
import { GamePerformance } from "../../components/gamePerformance";
import { AboutTheProduct } from "../../components/aboutTheProduct"
import { Comments } from "@/components/comments";

import { useRouter } from "next/router";

const Computer = () => {
    const route = useRouter()
    const id = route.query.id

    return (
        <main className={styles.productPageContainer}>
            <section className={styles.product}>
                <section >
                    <div className={styles.imagensContainer}>
                    <Image src={"/image/JBL.webp"} width={200} height={200} alt="Computador Gamer"/>
                    <div className={styles.circles}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span className={styles.left}>
                        <button className={styles.nextImage}><AiFillLeftCircle/></button>
                    </span>
                    <span className={styles.right}>
                        <button className={styles.nextImage}><AiFillRightCircle/></button>
                    </span>
                    </div>
                </section>
                <section className={styles.productInfo}>
                    <h3>HEADSET GAMER JBL QUANTUM 400 - PARA CONSOLE E PC</h3>
                    <span className={styles.status}>Produto Disponivel</span>
                    <div className={styles.productDescription}>
                    <h4>Descrição</h4>
                    <p>- Resposta de frequência: 20 Hz a 20 kHz</p>
                    <p>- Resposta de frequência do microfone: 100 Hz a 10 kHz</p>
                    <p>- Potência máx. de entrada: 30 mW</p>
                    <p>- Sensibilidade: 98 dB SPL @1 kHz / 1 mW</p>
                    <p>- Sensibilidade do microfone: -40 dBV @ 1 kHz / Pa</p>
                    <p>- Impedância: 32 Ohm</p>
                    <p>- Padrão de captação do microfone: Direcional</p>
                    </div>
                    <div className={styles.priceContainer}>
                        <span>
                            <p className={styles.oldPrice}>R$ 400,00</p>
                            <p className={styles.price}>R$ 320,00</p>
                        </span>
                        <button>COMPRAR</button>
                    </div>
                </section>
            </section>
                <Comments/>
        </main>
    )
}

export default Computer