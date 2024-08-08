import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ disponibilidad, onAdd }) => {
  const [contador, setContador] = useState(0); // Estado inicial a 1
  const [itemStock, setItemStock] = useState(disponibilidad);
  const [visible, setVisible] = useState(true);

  const incrementar = () => {
    if (contador < itemStock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const addToCart = () => {
    if (contador <= itemStock && contador > 0) {
      setItemStock(itemStock - contador);
      onAdd(contador);
      setContador(1);
      setVisible(false);
    }
  };

  useEffect(() => {
    setItemStock(disponibilidad);
  }, [disponibilidad]);

  return (
    <>
      {visible ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-dark rounded-start-pill"
                  onClick={decrementar}
                >
                  -
                </button>
                <button type="button" className="btn btn-dark">
                  Asientos reservados: {contador}
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-end-pill"
                  onClick={incrementar}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="row my-1">
            <div className="col">
              <button
                type="button"
                className="btn btn-dark rounded"
                onClick={addToCart}
              >
                Añadir al carrito de reservas
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Link to={"/cart"} className="btn btn-dark rounded-pill">
          Finalizar compra
        </Link>
      )}
    </>
  );
};

export default ItemCount;
