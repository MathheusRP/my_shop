import styles from "./comments.module.css"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

export const Comments = () => {

    return (
        <section className={styles.commentsContainer}>
            <span className={styles.title}>
                <h3>AVALIAÇÕES</h3>
            </span>
            <div className={styles.sendComment}>
                <Image src="/image/profileImage.png" alt="Foto de perfil" width={50} height={50}/>
                <div className={styles.comment}>
                    <textarea name="comment" id="myComment" ></textarea>
                    <button type="button">Comentar</button>
                </div>
            </div>
            <ul className={styles.listComment}>
                <li>
                    <Image src="/image/profileImage.png" alt="Foto de perfil" width={50} height={50}/>
                    <div className={styles.commentContent}>
                        <span>
                            <p className={styles.name}>Luiza Silva</p> 
                            <div className={styles.starts}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div> 
                            <p className={styles.time}>25 de Março de 2023</p>
                        </span>
                        <p style={{fontSize: 18}}>Gostei muito desse produto</p>
                    </div>
                </li>
                <li>
                    <Image src="/image/profileImage.png" alt="Foto de perfil" width={50} height={50}/>
                    <div className={styles.commentContent}>
                        <span>
                            <p className={styles.name}>Luiza Silva</p> 
                            <div className={styles.starts}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div> 
                            <p className={styles.time}>24 de Março de 2023</p>
                        </span>
                        <p style={{fontSize: 18}}>Bom</p>
                    </div>
                </li>
                <li>
                    <Image src="/image/profileImage.png" alt="Foto de perfil" width={50} height={50}/>
                    <div className={styles.commentContent}>
                        <span>
                            <p className={styles.name}>Luiza Silva</p> 
                            <div className={styles.starts}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div> 
                            <p className={styles.time}>23 de Março de 2023</p>
                        </span>
                        <p style={{fontSize: 18}}>Gostei muito desse produto</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}