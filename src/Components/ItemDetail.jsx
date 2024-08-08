
//detalle  dentro de cada articulo

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import "../assets/styles/styles.css"

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity);
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container-fluid itemDetailContainer bannerContainer">

      <div className="container">

        <div className="col">
          <img src={item.img} alt={item.hospedaje} />
        </div>

        <div className="col">
          <h1 className="text-white pb-5">{item.hospedaje}</h1>
          <h3 className="text-white pt-5">{item.descripcion}</h3>
          <p className="text-white pt-5">$ {item.precio}</p>
          {/* <ItemCount disponibilidad={item.disponibilidad} onAdd={onAdd} /> */}
        </div>

      </div>

    </div>
  );
};

export default ItemDetail;
