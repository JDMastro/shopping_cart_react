const Products_var = require('../actionsType/ProductsActionsType');


const ProductsReducer = (state = {
    Products: []
}, action) => {
    switch (action.type) {
        case Products_var.GET_ALL_PRODUCTS:
            return {
                ...state,
                Products: action.payload
            }
        case Products_var.INCREASE_COUNT:
            return Object.assign({}, state, {
                Products : [...state.Products, state.Products[action.payload].counter += 1]
            })
           
        case Products_var.DECREASE_COUNT:
            return Object.assign({}, state, {
                Products : [...state.Products, state.Products[action.payload].counter -= 1]
            })
        default: return { ...state }
    }
}

export default ProductsReducer