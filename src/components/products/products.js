import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Col, Container } from 'react-bootstrap';
import * as ProductsActionsCreators from '../../store/actions/ProductsActions'
import * as CartActionsCreators from '../../store/actions/CartActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



import Rating from '../rating/rating';

const Products = () => {

    const Products = useSelector(state => state.ProductsReducer.Products)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(ProductsActionsCreators.GetAllProducts())
    })

    return (
        <div className="p-4">
            <Container className="border p-3">
                <Row>
                    {
                        Products.map((data, i) =>
                            <Col md="auto" sm="auto" key={i}>
                                <Card style={{ width: '20rem' }} className="m-2">
                                    <Card.Img variant="top" src={`./images/${data.filename}`} className="img-fluid" />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>

                                        <Row>
                                            <Col md="6"><small className="text-muted">$ {data.price}</small></Col>
                                            <Col md="6"><div className="float-right"><Rating value={data.rating} /></div></Col>
                                            <Col md="12">
                                                <div className="d-flex justify-content-center">
                                                    <input type="button" value="+" className="m-1 btn btn-outline-primary" onClick={() => dispatch(ProductsActionsCreators.Increase_count_product(i)) } />
                                                    <span className="m-1">{data.counter}</span>
                                                    <input type="button" value="-" className="m-1 btn btn-outline-danger" disabled={
                                                        data.counter === 0 ? true : false
                                                    } onClick={() => dispatch(ProductsActionsCreators.Decrease_count_product(i)) } />
                                                </div>
                                            </Col>
                                            <Col md="12" className="mt-2">
                                                <div className="d-flex justify-content-center">
                                                    <button type="button" value="Add to Cart" className="btn btn-primary" disabled={
                                                        data.counter === 0 ? true : false
                                                    } onClick={()=>
                                                        dispatch(CartActionsCreators.Add_products(data))
                                                    }><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                                       Add to cart</button>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Products