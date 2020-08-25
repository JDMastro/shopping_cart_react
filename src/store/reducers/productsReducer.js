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
        default: return { ...state }
    }
}

export default ProductsReducer