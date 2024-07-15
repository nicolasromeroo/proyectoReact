
import React from 'react';
import logo from '../assets/img/logo.png';
import CartWidget from './CartWidget';

import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <div className="container-fluid bg-warning navBar">
            <div className="row">
                <div className="col">
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
                    </ul>
                </div>
                <div className='col'><i class="fa-solid fa-cart-shopping"></i></div>
            </div>
        </div>
    )
}

export default NavBar

// import React from 'react';
// import logo from '../assets/img/logo.png';
// import CartWidget from './CartWidget';


// const NavBar = () => {

//     return (
//         <nav className="navbar navbar-expand-lg navbarStyle">
//             <div className="container-fluid">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//                     <a href='index.html'>
//                         <img src={logo} className="img-thumbnail" alt="logo" />
//                     </a>


//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Reservas</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Destinos</a>
//                         </li>
//                     </ul>

//                     <CartWidget imagen={"https://e7.pngegg.com/pngimages/985/518/png-clipart-graphics-calendar-illustration-computer-icons-calendar-icon-calendar-logo.png"} cantidad={0} />

//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success" type="submit">Buscar</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default NavBar