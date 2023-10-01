import Image from "next/image"
import styles from "../styles/header.module.css"
import { BiSearchAlt2 } from "react-icons/bi"

const HeaderComponent = () => {

    return (
        <header className={styles.header}>
            <h1>My <span>Shop</span></h1>

            <div className={styles.inputContainer
            }>
                <input type="text" placeholder="Pesquisar" />
                <BiSearchAlt2 className={styles.icon} />
            </div>

            <div>
                <Image src={"/image/profileImage.png"} alt="Profile Image" width={50} height={50} />

            </div>
        </header>
    )
}

export default HeaderComponent