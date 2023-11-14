import styles from "./aboutTheProduct.module.css"
import Image from "next/image"

export const AboutTheProduct = () => {

    return (
        <section className={styles.aboutTheProductContainer}>
            <span className={styles.title}>
                <h3>SOBRE</h3>
            </span>
            <ul className={styles.componentsList}>
                <li>
                    <div className={styles.image}>
                        <Image src="https://img.terabyteshop.com.br/archive/4157291290/processador-intel-core-i5-10gen-01.png" alt="Processador I5" width={100} height={100}/>
                    </div>
                    <div className={styles.info}>
                        <h4>PROCESSADOR INTEL i5 10400F </h4>
                        <p>
                            Os processadores para desktop Intel® Core™ da 13ª Geração oferecem amplo suporte para plataforma 
                            que permite otimizar seu PC usando as mais recentes tecnologias para jogos.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <Image src="https://cdn.pichau.com.br/wysiwyg/Computadores_desc/GPU/Nvidia/rtx_3070.png" alt="RTX 3070" width={100} height={100}/>
                    </div>
                    <div className={styles.info}>
                        <h4>PLACA DE VÍDEO RTX 3060 8GB </h4>
                        <p>
                            A GeForce RTX 3060 é até 30% mais rápida do que a GTX original. Com a tecnologia premiada da arquitetura 
                            NVIDIA Turing™ e a memória GDDR6 ultrarrápida, é a potência definitiva para os games mais populares de 
                            hoje. É hora de se preparar para ser RTX.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <Image src="https://dlcdnwebimgs.asus.com/gain/5AB54928-6206-49D6-BB49-A106272AC630/w717/h525" alt="RTX 3070" width={100} height={100}/>
                    </div>
                    <div className={styles.info}>
                        <h4>Z490 PLACA MÃE GAMING INTEL® Z490</h4>
                        <p>
                            Placa-mãe gaming Intel® Z490 LGA 1200 micro ATX com 14 estágios de energia, DDR4 4600, AI Overclocking, AI Cooling, 
                            AI Cooling, AI Networking, Rede Intel® 2.5 Gb, USB 3.2 Gen 2, SATA e iluminação AURA Sync RGB
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <Image src="https://images.tcdn.com.br/img/img_prod/687149/fonte_atx_600w_potencia_real_t_dagger_101581_1_ca65c4942ead008648ddc13c5575c5bc.png" alt="RTX 3070" width={100} height={100}/>
                    </div>
                    <div className={styles.info}>
                        <h4>FONTE ATX 600W T-DAGGER</h4>
                        <p>
                            A fonte de energia de alto desempenho T-DAGGER é um produto impressionante, 
                            que oferece uma experência incrivel para todos os gamers que procuram potência e estabilidade
                        </p>
                    </div>
                </li>
              
            </ul>
        </section>
    )
}