import { useRouter } from "next/router";

const Computer = () => {
    const route = useRouter()
    const id = route.query.id

    return (
        <h1>Computador de ID: {id}</h1>
    )
}

export default Computer