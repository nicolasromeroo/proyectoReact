
// import React from 'react';
// import logo from '../assets/img/logo.png';
// import CartWidget from './CartWidget';

// import { Link } from "react-router-dom"


// const NavBar = () => {

//     return (
//         <div className="container-fluid bg-warning navBar">
//             <div className="row">
//                 <div className="col">
//                     <ul className="nav justify-content-center">
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/category/:id">Destinos destacados</Link>
//                         </li>

//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Vuelos</a>
//                             <ul className="dropdown-menu">
//                                 <li><Link className="dropdown-item" to="/vuelos">Todos</Link></li>
//                                 <li><Link className="dropdown-item" to="/pais/argentina">Argentina</Link></li>
//                                 <li><Link className="dropdown-item" to="/pais/brasil">Brasil</Link></li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='col'><i className="fa-solid fa-cart-shopping"></i></div>
//             </div>
//         </div>
//     )
// }

// export default NavBar

// import React from 'react';
// import logo from '../assets/img/logo.png';
// import CartWidget from './CartWidget';
// import { Link } from "react-router-dom";
// import './NavBar.css'; // Asegúrate de importar el archivo CSS

// const NavBar = () => {
//     return (
//         <div className="navBar">
//             <div className="navBar__container">
//                 <div className="navBar__logo">
//                     <img src={logo} alt="Logo" />
//                 </div>
//                 <ul className="navBar__links">
//                     <li className="navBar__item">
//                         <Link className="navBar__link" aria-current="page" to="/">Inicio</Link>
//                     </li>
//                     <li className="navBar__item">
//                         <Link className="navBar__link" to="/category/:id">Destinos destacados</Link>
//                     </li>
//                     <li className="navBar__item dropdown">
//                         <a className="navBar__link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Vuelos</a>
//                         <ul className="dropdown-menu">
//                             <li><Link className="dropdown-item" to="/vuelos">Todos</Link></li>
//                             <li><Link className="dropdown-item" to="/pais/argentina">Argentina</Link></li>
//                             <li><Link className="dropdown-item" to="/pais/brasil">Brasil</Link></li>
//                         </ul>
//                     </li>
//                 </ul>
//                 <CartWidget></CartWidget>
//                 {/* <div className="navBar__cart">
//                     <i className="fa-solid fa-cart-shopping"></i>
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default NavBar;

import React from 'react';
import logo from '../assets/img/specialTravel-logo.png';
import CartWidget from './CartWidget';
import '../assets/styles/styles.css'
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="container-fluid bg-dark navBar">
            <div className="row">
                <div className="col">
                    <li className='position-absolute'>
                        <img className='logoTravel' src={logo}></img>
                    </li>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/:id">Destinos destacados</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Vuelos</a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/vuelos">Todos</Link></li>
                                <li><Link className="dropdown-item" to="/pais/argentina">Argentina</Link></li>
                                <li><Link className="dropdown-item" to="/pais/brasil">Brasil</Link></li>
                            </ul>
                        </li>
                        <CartWidget></CartWidget>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
