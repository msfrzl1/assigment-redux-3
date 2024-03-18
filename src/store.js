import { createStore, combineReducers } from 'redux';
import modalReducer from './features/modal/modalSlice';
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
   modal: modalReducer,
   cart: cartReducer,
});

const store = createStore(rootReducer);
export default store;
