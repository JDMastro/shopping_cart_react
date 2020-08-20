


const cart_variable = require('../actionsType/CartActionsType')


const CartReducer = (state = {
    Cart: [],
    total: 0
}, action) => {
    switch (action.type) {
        case cart_variable.ADD_CART:
            const IndexProduct = state.Cart.findIndex(e => e.id === action.payload.id)

            if (IndexProduct === -1) {
                return Object.assign({}, state, {
                    Cart: [...state.Cart, action.payload],
                    total: state.total + action.payload.counter * action.payload.price
                })
            }

            else {

                return {
                    ...state,
                    Cart: state.Cart.map((data, i) => {
                        if (i === IndexProduct) Object.assign({}, state, {
                            Cart: action.payload
                            
                        })

                        return data
                    })
                }

            }


        default: return { ...state }
    }
}

export default CartReducer