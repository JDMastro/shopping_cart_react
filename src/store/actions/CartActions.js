const cart_variable = require('../actionsType/CartActionsType')

function add_products (data){
    return {
        type: cart_variable.ADD_CART,
        payload: data
    }
}

export function Add_products(data){
    return (dispatch) => {
        dispatch(add_products(data))
    }
}