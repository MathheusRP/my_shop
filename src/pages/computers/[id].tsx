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
                    <Image src={"/image/gabinete.png"} width={200} height={200} alt="Computador Gamer"/>
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
                    <h3>Computador Gamer, Intel i5-10400F, GeForce RTX 3060 Super 8GB, 16GB DDR4, SSD M.2 480GB</h3>
                    <span className={styles.status}>Produto Disponivel</span>
                    <div className={styles.productDescription}>
                    <h4>Descrição</h4>
                    <p><b>Processador</b> Intel I5-10400F</p>
                    <p><b>Placa de Vídeo</b> GeForce RTX 3060 8GB</p>
                    <p><b>Memoria Ram</b> 16GB DDR4</p>
                    <p><b>Placa Mãe</b> PLACA MÃE A520M</p>
                    <p><b>Armazenamento</b> SSD 480GB</p>
                    <p><b>Fonte</b> 650W</p>
                    <p><b>Coler</b> Aircooler</p>
                    <p><b>Gabinete</b> Gabinete preto com tampa de vidro</p>
                    </div>
                    <div className={styles.priceContainer}>
                        <span>
                            <p className={styles.oldPrice}>R$ 4.000,00</p>
                            <p className={styles.price}>R$ 3.200,00</p>
                        </span>
                        <button>COMPRAR</button>
                    </div>
                </section>
            </section>
                <GamePerformance/>
                <AboutTheProduct/>
                <Comments/>
        </main>
    )
}

export default Computer