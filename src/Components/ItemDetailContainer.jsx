import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import articulosDestacados from "../json/articulosDestacados.json";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const docRef = doc(db, "items", id); // Usa el id del parámetro
        getDoc(docRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error("Error: Documento no encontrado en Firestore");
                    // Busca en el JSON como respaldo
                    const foundItem = articulosDestacados.find(item => item.id == id);
                    if (foundItem) {
                        setItem(foundItem);
                    } else {
                        console.error("Error: No existe el documento en Firestore ni en JSON");
                        setItem(null);
                    }
                }
            })
            .catch(error => {
                console.error("Error al obtener el documento: ", error);
                setItem(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <p>Item no encontrado</p>}
        </div>
    );
};

export default ItemDetailContainer;
