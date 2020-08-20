import { combineReducers } from 'redux';
import ProductsReducer from './reducers/productsReducer'
import CartReducer from './reducers/cartRefucers'

const rootRedurcers = combineReducers({
    ProductsReducer,
    CartReducer
});


export default rootRedurcers;