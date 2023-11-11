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
        image: "https://shopinfo.vteximg.com.br/arquivos/ids/1521212-1000-1000/1.png?v=638320034854600000"
    },
    {
        id: "pc2",
        title: "PC Gamer T-GAMER Hawk Intel i5 10400F / NVIDIA GeForce RTX 3060 / 8GB DDR4 / SSD 240GB",
        price: 4200,
        discount: 10,
        image: "https://img.terabyteshop.com.br/produto/g/pc-gamer-t-gamer-hawk-intel-i5-10400f-nvidia-geforce-rtx-3060-ddr4-8gb-ssd-240gb_177230.png"
    },
    {
        id: "pc3",
        title: "Computador Gamer SSD AMD Ryzen 5 2400G, 8GB, HD 1TB, Windows 10 Pro (Versão de Avaliação) [LG1012]",
        price: 2500,
        discount: 15,
        image: "https://www.mercanteexpress.com.br/image/cache/sellers/10003/gamers_LG-1024x1024.png"
    },
    {
        id: "pc4",
        title: "PC Gamer - Computador WAZ - wazX GameOn A7 (Core i5 7th Gen, HD 1TB, 8GB DDR4, GTX 1050Ti, Fonte 500W Real)",
        price: 3500,
        discount: 0,
        image: "https://www.mercanteexpress.com.br/image/cache/sellers/10003/gamers_LG-1024x1024.png"
    },
]

export const HeadsetsList: ICard[] = [
    {
        id: "headSet1",
        title: "Headset Gamer Sem Fio Logitech G733 7.1 Dolby Surround com Tecnologia Blue VO!CE, RGB LIGHTSYNC, Drivers de Áudio Avançados",
        price: 500,
        discount: 20,
        image: "https://m.media-amazon.com/images/I/71xNjrzG69L._AC_SX569_.jpg"
    },
    {
        id: "headSet2",
        title: "Headset Gamer Fallen Morcego Lightpro Preto",
        price: 300,
        discount: 10,
        image: "https://static.cdnlive.com.br/uploads/602/produto/16941771088369_zoom.jpg"
    },
    {
        id: "headSet3",
        title: "Headset Gamer Hive Estereo Driver 40 Mm Cabo 3M Preto E Azull Letron",
        price: 400,
        discount: 10,
        image: "https://b2bleonorashop.vtexassets.com/arquivos/ids/160925-800-auto?v=637995590053530000&width=800&height=auto&aspect=true"
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