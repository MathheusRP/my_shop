import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'

import styles from "./homePage.module.css"
import { Section } from "@/components/section"
import { sectionsList } from "@/data/section"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>
      {
        sectionsList.map((section, index) => {
          return (
            <Section
              key={index}
              title={section.title}
              bannerImage={section.bannerImage}
              link={section.link}
              productType={section.productType}
              featuredProduct={section.featuredProduct}
            />
          )
        })
      }

    </div>
  )
}
