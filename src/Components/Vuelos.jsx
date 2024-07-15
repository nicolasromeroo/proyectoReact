
import { useEffect, useState } from "react"
import arrayVuelos from "../json/articulos.json"
import { useParams } from "react-router-dom"

const Vuelos = () => {
    const [items, setItems] = useState(arrayVuelos)
    const { id } = useParams()

    useEffect(() => {
        setItems(id ? arrayVuelos.filter(item => item.pais == id) : arrayVuelos)
    }, [id])
 
    return (
        <div className="container my-5">
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-md-3 mb-3">
                        <div className="card">
                            <img src={item.img} className="card-img-top" alt={item.hospedaje} />
                            <div className="card-body text-center">
                                <h2>{item.hospedaje}</h2>
                                <h5>{item.pais}</h5>
                                <p className="card-text">{item.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vuelos
