import React from 'react';
import cabalango from '../assets/img/cabalango.jpg';
import capital from '../assets/img/capital.jpg';
import elDurazno from '../assets/img/elDurazno.jpg';
import losReartes from '../assets/img/losReartes.jpg';
import avion from '../assets/img/avion.png';
import { Link } from 'react-router-dom';
import TypedText from './TypedText';

function Body() {
    return (
        <section className='bg-dark text-white container-fluid p-0'>
            <div className='bannerContainer text-center py-5'>
                <h1>Special Travel</h1>
                {/* <h3>Tu destino favorito.</h3> */}
            <div className='typedContainer'>

                <TypedText />
            </div>
            </div>

            <div className='text-center mb-5'>
                <Link to={"/vuelos"}>
                    <img src={avion} className="avion img-fluid" alt="avion" />
                </Link>
                <h2 className='mt-4'>Mirá algunos de nuestros destinos en Córdoba</h2>
            </div>

            <section className="cardContainer container-fluid p-3 bg-dark">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card bg-success h-100">
                            <img src={cabalango} className="card-img-top w-100" alt="cabalango" />
                            <div className="card-body">
                                <h5 className="card-title">Cabalango, Córdoba</h5>
                                <p className="card-text">Cabalango es una villa serrana del departamento Punilla, a 8 km al sureste de Tanti y a 12 km al oeste de Villa Carlos Paz, sobre el arroyo Los Chorrillos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <img src={capital} className="card-img-top w-100" alt="capital" />
                            <div className="card-body">
                                <h5 className="card-title">Capital, Córdoba</h5>
                                <p className="card-text">La capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card bg-info h-100">
                            <img src={elDurazno} className="card-img-top w-100" alt="el durazno" />
                            <div className="card-body">
                                <h5 className="card-title">El Durazno, Córdoba</h5>
                                <p className="card-text">El Durazno es una localidad del Departamento Calamuchita, provincia de Córdoba, Argentina. A partir del 3 de junio de 2010 pasó a formar parte del radio municipal de la localidad de Villa Yacanto, según consta en el Boletín Oficial.​</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card bg-danger h-100">
                            <img src={losReartes} className="card-img-top w-100" alt="los reartes" />
                            <div className="card-body">
                                <h5 className="card-title">Los Reartes, Córdoba</h5>
                                <p className="card-text">Los Reartes es una comuna situada en el departamento Calamuchita, provincia de Córdoba, Argentina. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Body;
