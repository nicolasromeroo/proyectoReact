import { useState } from "react"

const Promesas = () => {
    const [item, setItem] = useState([])

    const hospedajesBsAs = [
        { id: 1, nombre: "NH Buenos Aires Crillon", ubicacion: "Avda. Santa Fe 796, Buenos Aires - Argentina", precio: 35000, rutaImg: "https://img.nh-hotels.net/zYN72/r0RXe/original/RC_NH_crillon_149.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white" },
        { id: 2, nombre: "NH Buenos Aires City", ubicacion: "Bolivar, 160, Buenos Aires - Argentina", precio: 42000, rutaImg: "https://img.nh-hotels.net/ael4Z/vY8Gy/original/RC_NH_city_165.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white" },
        { id: 3, nombre: "NH Buenos Aires Latino", ubicacion: "Suipacha, 309, C1008AAG, Buenos Aires - Argentina", precio: 28700, rutaImg: "https://img.nh-hotels.net/NJ2G/3ANbJ/original/RSP_NH_latino_096.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white" },
        { id: 4, nombre: "NH Buenos Aires Florida", ubicacion: "San Martin, 839, C1004AAQ, Buenos Aires - Argentina", precio: 38000, rutaImg: "https://img.nh-hotels.net/A7N/Doj7q/original/RST2_NH_florida_078.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white" },
        { id: 5, nombre: "NH Collection Buenos Aires Lancaster", ubicacion: "Av. Cordoba 405, C1054AAD, Buenos Aires - Argentina", precio: 52300, rutaImg: "https://img.nh-hotels.net/J92X7/24KP6/original/RSV_NH_collection-lancaster_064.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white" }
    ]

    const promesa = new Promise((res) => {
        setTimeout(() => {
            res(hospedajesBsAs)
        }, 3000)
    })

    promesa.then(result => {
        console.log(result)
        setItem(result)
    })

    return (

        <div className="container">
            <div className="row">
                <h1>ejemplo map con promesas</h1>
                    {item.map(item => (

                        <div key={item.id} className="card mb-3">
                            <div className="row g-0">

                                <div className="col-md-4">
                                    <img src={item.rutaImg} className=" img-fluid rounded-start" alt={item.nombre}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <p className="card-text">{item.ubicacion}</p>
                                        <p className="card-text"><small className="text-body-secondary">{item.precio}</small></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
            </div>
        </div>
    )
}

export default Promesas