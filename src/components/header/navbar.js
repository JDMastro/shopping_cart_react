import React from 'react'

const NavBar = () => {
    return (

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a></li>
                <li className="nav-item"><a className="nav-link" href="/#">Mi Pedido</a></li>
                <li className="nav-item"><a className="nav-link" href="/#">Mis Ordenes</a></li>
                <li className="nav-item"><a className="nav-link" href="/#">Registrarse</a></li>
                <li className="nav-item"><a className="nav-link" href="/#">Contactenos</a></li>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-sm dropdown-toggle border border-white ml-0 mr-2 bg-navbar" type="submit"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg></button>
                </form>
            </ul>
            <div className="dropdown dc-lang collapse navbar-collapse">
                <small>
                    <button className="btn btn-sm dropdown-toggle border border-white bg-navbar " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ESP
            </button>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-sm-right div-lang" aria-labelledby="dropdownMenuButton" >
                        <a className="dropdown-item div-lang" href="/#"><img src="./image/flag/col.svg" className="img-icom-xs mr-2" alt="no img" />ESP</a>
                        <a className="dropdown-item div-lang" href="/#"><img src="./image/flag/eng.svg" className="img-icom-xs mr-2" alt="no img" />ENG</a>
                        <a className="dropdown-item div-lang" href="/#"><img src="./image/flag/por.svg" className="img-icom-xs mr-2" alt="no img" />POR</a>
                        <a className="dropdown-item div-lang" href="/#"><img src="./image/flag/fra.svg" className="img-icom-xs mr-2" alt="no img" />FRA</a>
                    </div>
                </small>
            </div>
        </div>





    )
}

export default NavBar