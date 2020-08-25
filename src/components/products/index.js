import React,{ useEffect } from 'react'
import ProductCard from './productCard'

import { useSelector, useDispatch } from 'react-redux'

import * as ProductosActionsCreators from '../../store/actions/ProductsActions'
const Products = () =>
{
    const productos = useSelector(state => state.ProductsReducer.Products)
    const cart = useSelector(state => state.CartReducer.cart)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(ProductosActionsCreators.GetAllProducts())
    })

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-12">
                    <section className="mt-4">
                        <div className="row">
                            <ProductCard data={productos} cart={cart}/>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Products;