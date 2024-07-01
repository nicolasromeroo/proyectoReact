
const ItemListContainer = ({titulo, subtitulo, parrafo}) => {
    return(
        <div className="p-5 wallpaperContainer">
            <div className="row">
                <div className="col text-center presContainer">
                    <h1 className="tituloILC">{titulo}</h1>
                    <h2 className="subtituloILC">{subtitulo}</h2>
                    <p className="parrafoILC">{parrafo}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer