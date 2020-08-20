import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
    var cart = useSelector(state => state.CartReducer.Cart)

    return (
        <div style={{ width: '25rem' }} className="p-2">
            {
                cart.map((data,i) => 
            <div key={i}>{data.title}{data.counter}</div>
                )
            }
        </div>
    )
}

export default ShoppingCart