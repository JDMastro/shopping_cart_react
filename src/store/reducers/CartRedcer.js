const cart_var = require('../actionsType/CartActionsType');

const getTotal = ( data) => {
    var Total = 0;
    data.map((e)=> 
        Total += (e.counter * e.price)
    )
    return Total
}

const CartReducer = (state= {
    cart : [],
    total : 0
}, action) =>
{
    switch(action.type){
        case cart_var.ADD_CART_SHOPPING :
            const IndexProduct = state.cart.findIndex(e => e.id === action.payload.id)

            if (IndexProduct === -1) {
                return Object.assign({}, state, {
                    cart: [...state.cart, action.payload],
                    total: state.total + action.payload.counter * action.payload.price
                })
            }else{
                return {
                    ...state,
                    cart: state.cart.map((data, i) => {
                        if (i === IndexProduct)
                        { 
                            Object.assign({}, state, {
                                cart: action.payload
                            })
                       }

                        return data
                    }),
                    total : getTotal(state.cart)
                }
            }

        case cart_var.DELETE_CART_SHOPPING :
            return {
                ...state,
                cart : state.cart.filter(e => e.id !== action.payload.id),
                total: getTotal(state.cart)
            }
        
        default : return { ...state }
    }
}





export default CartReducer