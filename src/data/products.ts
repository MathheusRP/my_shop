import { ICard } from "@/types/products"
import { filterComputer, filterHeadset } from "./filterOptions"
import { IFiltersList } from "@/types/products"

export interface IAllProductList {
    type: string,
    list: ICard[]
    filterOptions: IFiltersList[]
}

export const ComputersList: ICard[] = [
    {
        id: "pc1",
        title: "Computador Gamer, Intel i5-10400F, GeForce RTX 2060 Super 8GB, 16GB DDR4, SSD M.2 480GB",
        price: 4000,
        discount: 10,
        image: "/productsImages/gabinete1.png"
    },
    {
        id: "pc2",
        title: "PC Gamer T-GAMER Hawk Intel i5 10400F / NVIDIA GeForce RTX 3060 / 8GB DDR4 / SSD 240GB",
        price: 4200,
        discount: 10,
        image: "/productsImages/gabinete2.png"
    },
    {
        id: "pc3",
        title: "Computador Gamer SSD AMD Ryzen 5 2400G, 8GB, HD 1TB, Windows 10 Pro (Versão de Avaliação) [LG1012]",
        price: 2500,
        discount: 15,
        image: "/productsImages/gabinete3.png"
    },
    {
        id: "pc4",
        title: "PC Gamer - Computador WAZ - wazX GameOn A7 (Core i5 7th Gen, HD 1TB, 8GB DDR4, GTX 1050Ti, Fonte 500W Real)",
        price: 3500,
        discount: 0,
        image: "/productsImages/gabinete4.png"
    },
]

export const HeadsetsList: ICard[] = [
    {
        id: "headSet1",
        title: "Headset Gamer Sem Fio Logitech G733 7.1 Dolby Surround com Tecnologia Blue VO!CE, RGB LIGHTSYNC, Drivers de Áudio Avançados",
        price: 500,
        discount: 20,
        image: "/productsImages/headset1.png"
    },
    {
        id: "headSet2",
        title: "Headset Gamer Fallen Morcego Lightpro Preto",
        price: 300,
        discount: 10,
        image: "/productsImages/headset2.png"
    },
    {
        id: "headSet3",
        title: "Headset Gamer Hive Estereo Driver 40 Mm Cabo 3M Preto E Azull Letron",
        price: 400,
        discount: 10,
        image: "/productsImages/headset3.png"
    },
]

export const AllProductsList: IAllProductList[] = [
    {
        type: "computers",
        list: ComputersList,
        filterOptions: filterComputer
    },
    {
        type: "headsets",
        list: HeadsetsList,
        filterOptions: filterHeadset
    }
]