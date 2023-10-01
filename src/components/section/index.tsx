import styles from "./section.module.css"
import Link from "next/link"
import Image from "next/image"

interface ISection {
  title: any
  link: string
  productType: string
  bannerImage: string
  featuredProduct: {
    id: number
    productImage: string
    description: string
    value: number
    discount: number
  }[]

}

export const Section = ({ title, link, productType, bannerImage, featuredProduct }: ISection) => {

  return (
    <section className={styles.sectionContainer}>
      <Link className={styles.acessButton} href={link}>
        <h2>{productType}</h2>
      </Link>
      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h3>My <span>Shop</span></h3>
          {title}
          {/* <h2 className={styles.title}>ACHE O <span>COMPUTADOR</span> IDEAL PARA VOCÊ <span>AQUI</span></h2> */}
          <Link href={link}>
            <span>Acessar</span>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image src={bannerImage} alt="computadores" width={250} height={250} />
        </div>
      </div>
      <ul className={styles.highlights}>
        {
          featuredProduct.map((product, index) => {
            return (
              <li key={index}>
                <Link href={`${link}/${product.id}`}>
                  <Image priority src={product.productImage} alt={product.description} width={250} height={250} />
                  <div className={styles.info}>
                    <p className={styles.detail}>{product.description}</p>
                    <div className={styles.prices}>
                      <p className={styles.oldPrice}>R$ {product.value}</p>
                      <span>
                        <p className={styles.discount}>{product.discount}% OFF</p>
                        <p className={styles.price}>R$ {product.value - (product.discount * product.value / 100)}</p>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })
        }
        {/* <li>
          <Link href={"/computadores/1"}>
            <Image src={"/image/gabinete.png"} alt="Computador" width={250} height={250} />
            <div className={styles.info}>
              <p className={styles.detail}>Computador Gamer, Intel i5-10400F, GeForce RTX 2060 Super 8GB, 16GB DDR4, SSD M.2 480GB</p>
              <div className={styles.prices}>
                <p className={styles.oldPrice}>R$ 4.000,00</p>
                <span>
                  <p className={styles.discount}>10% OFF</p>
                  <p className={styles.price}>R$ 3.600,00</p>
                </span>
              </div>
            </div>
          </Link>
        </li> */}
      </ul>
    </section>
  )
}