

const ItemDetail = ({ item }) => {
    console.log(item)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.img} alt={item.hospedaje} />
                </div>
                <div className="col">
                    <h1>{item.hospedaje}</h1>
                    <h3>{item.descripcion}</h3>
                    <p>$ {item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail