
import { useEffect, useState } from "react"
import articulosDestacados from "../json/articulosDestacados.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(articulosDestacados.find(item => item.id == id ))
            }, 1000)
        })

        promesa.then(response => {
            setItem(response)
        })
    }, [id])

    return (
        <div className="container">
            <div className="row">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
