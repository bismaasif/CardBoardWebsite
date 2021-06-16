import {combineReducers} from 'redux'
import authReducer from './auth/authReducer';
import CartReducer from './Cart/CartReducer';

import ProductReducer from './Product/ProductReducer';
var RootReducer=combineReducers({
    
    products:ProductReducer,
    auth:authReducer,
    cart:CartReducer,
    
})
export default RootReducer;