


import React from 'react';
import cabalango from '../assets/img/cabalango.jpg';
import capital from '../assets/img/capital.jpg';
import elDurazno from '../assets/img/elDurazno.jpg';
import losReartes from '../assets/img/losReartes.jpg';
import avion from '../assets/img/avion.png';

function Body() {
    return (
        <section className='bodyContainer'>
            <img src={avion} className="avion" alt="avion" />
            <h2 className='w-5'>Mirá algunos de nuestros destinos destacados</h2>

            <section className="cardContainer">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={cabalango} className="card-img-top" alt="cabalango" />
                    <div className="card-body">
                        <h5 className="card-title">Cabalango, Córdoba</h5>
                        <p className="card-text">Cabalango es una villa serrana del departamento Punilla, a 8 km al sureste de Tanti y a 12 km al oeste de Villa Carlos Paz, sobre el arroyo Los Chorrillos.</p>
                        <button className="botonReservar btn btn-primary">Reservar</button>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={capital} className="card-img-top" alt="capital" />
                    <div className="card-body">
                        <h5 className="card-title">Capital, Córdoba</h5>
                        <p className="card-text">La capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba.</p>
                        <button className="botonReservar btn btn-primary">Reservar</button>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={elDurazno} className="card-img-top" alt="el durazno" />
                    <div className="card-body">
                        <h5 className="card-title">El Durazno, Córdoba</h5>
                        <p className="card-text">El Durazno es una localidad del Departamento Calamuchita, provincia de Córdoba, Argentina. A partir del 3 de junio de 2010 pasó a formar parte del radio municipal de la localidad de Villa Yacanto, según consta en el Boletín Oficial.​</p>
                        <button className="botonReservar btn btn-primary">Reservar</button>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={losReartes} className="card-img-top" alt="los reartes" />
                    <div className="card-body">
                        <h5 className="card-title">Los Reartes, Córdoba</h5>
                        <p className="card-text">Los Reartes es una comuna situada en el departamento Calamuchita, provincia de Córdoba, Argentina. </p>
                        <button className="botonReservar btn btn-primary">Reservar</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Body