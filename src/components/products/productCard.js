import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Accordion, useAccordionToggle } from 'react-bootstrap';
import * as CartActionsCreators from '../../store/actions/CartActions'

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <p className="mr-3">
            <a onClick={decoratedOnClick} href='/#' >
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-info-circle mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                    <circle cx="8" cy="4.5" r="1" />
                </svg>{children}
            </a>
        </p>
    );
}

const ProductCard = ({ data, cart }) => {

    const dispatch = useDispatch()

    const addTocart = (data) => {
        var productos = data
        productos.counter += 1
        dispatch(CartActionsCreators.AddCartShopping(productos))
    }

    const deleteTocart = (data) => {
        data.counter = 0
        dispatch(CartActionsCreators.DeleteCartShopping(data))
    }
    return (
        data.map((data, i) =>

            <div className="col-md-3 col-sm-6 mb-2 text-center " key={i}>
                <div className="card shadow-sm">
                    <div className="ml-1 mr-1 mt-2">
                        <h6>{data.title}</h6>
                    </div>
                    <div>
                        <img alt="no img" className="img-fluid img-thumbnail shadow-sm ml-1 mr-1" src={`./image/${data.filename}`} />
                        <div className="overlay"></div>
                    </div>
                    <small>
                        <Accordion>
                            <CustomToggle eventKey={`${i}`}>Más info...</CustomToggle>
                            <Accordion.Collapse eventKey={`${i}`}>
                                <Card.Body>
                                    <div className="text-justify ml-1 mr-1">
                                        <p>
                                            {data.description}
                                        </p>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>

                        </Accordion>
                    </small>
                    <div>
                        <div className="col-sm-12 col-xs-8"></div>
                        <div className="row">
                            <div className="col-sm-12 col-xs-8">
                                <span className="text-pricing">$ {data.price} </span>
                                <button type="button" className="btn btn btn-my-outline-primary btn-sm mb-1 ml-2" hidden={
                                    cart.findIndex(e => e.id === data.id) === -1 ? false : true
                                } onClick={() => addTocart(data)}>
                                    <svg className="mr-1 bi bi-plus-circle" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                                        <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    </svg><small> Agregar</small></button>

                                <button type="button" className="btn btn-my-danger btn-sm mb-1 ml-0 mr-1" hidden={
                                    cart.findIndex(e => e.id === data.id) === -1 ? true : false
                                } onClick={()=> deleteTocart(data)}>
                                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg><span className="badge badge-light ml-1">{data.counter}</span>
                                </button>

                                <button type="button" className="btn btn-success btn-sm mb-1" hidden={
                                    cart.findIndex(e => e.id === data.id) === -1 ? true : false
                                } onClick={() => addTocart(data)}>
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                                        <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    </svg>
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    )
}

export default ProductCard

/*



*/