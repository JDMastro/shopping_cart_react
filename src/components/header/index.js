import React from 'react'
import NavBar from './navbar'
import Menu from './menu'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#000000" }} name="navbarheader">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <img className="img-fluid img-responsive ml-0 mr-0" style={{ width: "7rem", height: "3em" }} src="https://dataprueba.web.app/img/logo240.png" alt="no img" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                </button>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="./image/flag/col.svg" className="img-icom-xs mr-2" alt="no img" />
                </button>

                <NavBar />

               
            </nav>
            <Menu/>
        </header>
    )
}

export default Header