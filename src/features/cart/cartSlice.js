import cartItems from '../../CartItems';

const initialState = {
   cartItems: cartItems,
   amount: cartItems.reduce((total, item) => total + item.amount, 0),
   totalPrice: cartItems.reduce((total, item) => total + item.price * item.amount, 0),
};

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'cart/clear':
         return {
            ...state,
            cartItems: [],
            amount: 0,
            totalPrice: 0,
         };
      case 'cart/increment': {
         const item = state.cartItems.find((item) => item.id === action.payload);
         return {
            ...state,
            cartItems: state.cartItems.map((item) => {
               if (item.id === action.payload) {
                  return { ...item, amount: item.amount + 1 };
               }
               return item;
            }),
            amount: state.amount + 1,
            totalPrice: state.totalPrice + item.price,
         };
      }
      case 'cart/decrement': {
         const newItems = state.cartItems
            .map((item) => {
               if (item.id === action.payload) {
                  if (item.amount === 1) {
                     return null;
                  } else if (item.amount > 1) {
                     return { ...item, amount: item.amount - 1 };
                  }
               } else {
                  return item;
               }
            })
            .filter((item) => item !== null);
         return {
            ...state,
            cartItems: newItems,
            amount: state.amount - 1,
            totalPrice: newItems.reduce((total, item) => total + item.price * item.amount, 0),
         };
      }
      default:
         return state;
   }
};

export const clearCart = () => {
   return { type: 'cart/clear' };
};

export const increment = (id) => {
   return { type: 'cart/increment', payload: id };
};

export const decrement = (id) => {
   return { type: 'cart/decrement', payload: id };
};

export default cartReducer;
