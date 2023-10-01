import { ReactElement } from "react"

interface ISection {
    title: ReactElement
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

export const sectionsList: ISection[] = [
    {
        title: <h2>ACHE O COMPUTADOR IDEAL PARA VOCÊ AQUI</h2>,
        bannerImage: "/image/gabinete.png",
        link: "/computers",
        productType: "Computadores",
        featuredProduct: [
            {
                id: 1,
                description: "Computador Gamer, Intel i5-10400F, GeForce RTX 2060 Super 8GB, 16GB DDR4, SSD M.2 480GB",
                discount: 10,
                productImage: "/image/gabinete.png",
                value: 3500
            },
            {
                id: 2,
                description: "Computador Gamer, Intel i5-10400F, GeForce RTX 2060 Super 8GB, 16GB DDR4, SSD M.2 480GB",
                discount: 0,
                productImage: "/image/gabinete.png",
                value: 3500
            },
            {
                id: 3,
                description: "Computador Gamer, Intel i5-10400F, GeForce RTX 2060 Super 8GB, 16GB DDR4, SSD M.2 480GB",
                discount: 20,
                productImage: "/image/gabinete.png",
                value: 3500
            }
        ]
    },
    {
        title: <h2>ENCONTRE OS MELHORES PERIFÉRICOS AQUI</h2>,
        bannerImage: "/image/JBL.webp",
        link: "/perifericos",
        productType: "Periféricos",
        featuredProduct: [
            {
                id: 1,
                description: "HEADSET GAMER MANCER TWILIGHT, RAINBOW, DRIVERS 50MM, PRETO, MCR-TLT-RGB02",
                discount: 10,
                productImage: "/image/JBL.webp",
                value: 250
            },
            {
                id: 2,
                description: "HEADSET GAMER MANCER TWILIGHT, RAINBOW, DRIVERS 50MM, PRETO, MCR-TLT-RGB02",
                discount: 0,
                productImage: "/image/JBL.webp",
                value: 250
            },
            {
                id: 3,
                description: "HEADSET GAMER MANCER TWILIGHT, RAINBOW, DRIVERS 50MM, PRETO, MCR-TLT-RGB02",
                discount: 20,
                productImage: "/image/JBL.webp",
                value: 250
            }
        ]
    }
]