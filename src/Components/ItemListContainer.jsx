import { useEffect, useState } from "react";
import articulosDestacados from "../json/articulosDestacados.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(articulosDestacados);
            }, 1000);
        });

        promesa.then((response) => {
            setItems(response);
        });
    }, [id]);

    const handleAdd = (item, cantidad) => {
        // Manejar la adición del ítem al carrito
        console.log(`Añadido ${cantidad} de ${item.nombre} al carrito`);
    }

    // importar productos a la base de datos
    // primera opcion
    // useEffect(() => {
    //     const db = getFirestore()
    //     const itemsCollection = collection(db, "items")
    //     articulosDestacados.forEach(item => {
    //         addDoc(itemsCollection, item)
    //     })

    //     console.log("Proceso de importacion finalizado!")
    // }, []) 

    // segunda opcion
    useEffect(() => {
        const importData = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            for (const item of articulosDestacados) {
                await addDoc(itemsCollection, item);
            }
            console.log("Proceso de importación finalizado!");
        };
        importData();
    }, [])


    return (
        <div className="container-fluid p-5 bannerContainer">
            <div className="row">
                <ItemList items={items} onItemSelect={setSelectedItem} />
                {selectedItem && (
                    <ItemCount
                        disponibilidad={selectedItem.disponibilidad}
                        onAdd={(cantidad) => handleAdd(selectedItem, cantidad)}
                    />
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;
