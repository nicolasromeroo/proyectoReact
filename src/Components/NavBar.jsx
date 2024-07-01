import React from 'react';
import logo from '../assets/img/logo.png';
import CartWidget from './CartWidget';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbarStyle">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a href='index.html'>
                        <img src={logo} className="img-thumbnail" alt="logo" />
                    </a>


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Reservas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Destinos</a>
                        </li>
                    </ul>

                    <CartWidget imagen={"https://e7.pngegg.com/pngimages/985/518/png-clipart-graphics-calendar-illustration-computer-icons-calendar-icon-calendar-logo.png"} cantidad={0} />

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar