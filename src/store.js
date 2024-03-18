import { createStore, combineReducers } from 'redux';
import modalReducer from './features/modal/modalSlice';

const rootReducer = combineReducers({
   modal: modalReducer,
});

const store = createStore(rootReducer);
export default store;
