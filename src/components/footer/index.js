import React from 'react'
import { useSelector } from 'react-redux'
import DropdownFooter from './dropdown'

const Footer = () => {

    const cart = useSelector(state => state.CartReducer.cart)

    const total = useSelector(state => state.CartReducer.total)
    return (
        <footer className="fixed-bottom">
            <nav className="navbar navbar-expand-lg navbar-dark bg-navbar" style={{ backgroundColor: "#000000" }} name="navbarfooter">
                <button class="navbar-toggler" type="button">
                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-cart4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </svg>Mi Pedido <span class="badge badge-light ml-1">{cart.length}</span>
                </button>

                <button class="navbar-toggler" type="button">
                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-cash-stack mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z" />
                        <path fill-rule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z" />
                        <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    </svg>$ {(Math.round(total * 100) / 100).toFixed(2)}
        </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContentFooter">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/*<a class="nav-link" href="/#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                               Ver mi Pedido <span class="badge badge-light">{cart.length}</span><span class="sr-only">(current)</span>
                               </a>*/}
                            <DropdownFooter cart={cart} />
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <strong><h6>Total: ${(Math.round(total * 100) / 100).toFixed(2)}</h6> </strong>
                    </span>
                </div>
            </nav>
        </footer>
    )
}

export default Footer