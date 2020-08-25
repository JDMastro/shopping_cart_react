const cart_var = require('../actionsType/CartActionsType');

function addCartShopping(data){
    return {
        type : cart_var.ADD_CART_SHOPPING,
        payload: data
    }
}

export function AddCartShopping(data){
    return (dispatch)=>{
        dispatch(addCartShopping(data))
    }
}

function deleteCartShopping(data){
    return {
        type : cart_var.DELETE_CART_SHOPPING,
        payload: data
    }
}

export function DeleteCartShopping(data){
    return (dispatch)=>{
        dispatch(deleteCartShopping(data))
    }
}

