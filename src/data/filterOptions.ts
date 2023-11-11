import { IFiltersList } from "@/types/products"

export const filterComputer: IFiltersList[] = [
    {
        title: "Procesasfores",
        options: [
            "I7-9700E",
            "I7-9700F",
            "I7-9700KF",
            "I3-12100F",
            "I3-10105F",
            "Ryzen 9 7900X",
            "Ryzen 7 7700X",
        ]
    },
    {
        title: "Placa de Vídeo",
        options: [
            "RTX 3050 8GB",
            "RTX 3060 4GB",
            "RTX 3050 8GB",
            "RTX 3050 4GB",
            "RTX 3050 2GB",
            "GTX 1060 4GB",
            "GTX 1080 8GB",
            "GTX 1080 4GB",
        ]
    },
    {
        title: "Armazenamento",
        options: [
            "SSD 120GB",
            "SSD 250GB",
            "SSD 480GB",
            "HD 1TB",
            "HD 2TB",
        ]
    }

]

export const filterHeadset: IFiltersList[] = [
    {
        title: "Cor",
        options: [
            "Preto",
            "Branco",
            "Azul",
            "Vermelho"
        ]
    },
    {
        title: "RGB",
        options: [
            "Sim",
            "Não"
        ]
    },
    {
        title: "Cabo",
        options: [
            "Sim",
            "Não"
        ]
    }

]