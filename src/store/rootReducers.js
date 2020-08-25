import { combineReducers } from 'redux';
import ProductsReducer from './reducers/productsReducer'
import CartReducer from './reducers/CartRedcer'

const rootRedurcers = combineReducers({
    ProductsReducer,
    CartReducer
});


export default rootRedurcers;