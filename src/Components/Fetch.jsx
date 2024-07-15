import { useEffect, useState } from "react"

const Fetch = () => {
    // let productos = []
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                // productos = data
                setProductos(data)
            })
    }, [])

    return (
        <div classNameName='container'>
            <div classNameName='row'>
                {productos.map(item => (
                    <div key={item.id} classNameName='col-md-3'>
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}</p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fetch