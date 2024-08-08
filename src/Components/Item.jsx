import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <div className="col">
            <div className="card bg-dark">
                <Link to={"/item/" + item.id}>
                    <img src={item.img} className="card-img-top img-fluid" width={100} alt={item.hospedaje} />
                </Link>
                <div className="card-body">
                    <p className="card-text">{item.descripcion}</p>
                    <p>$ {item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Item