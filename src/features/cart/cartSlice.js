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
      default:
         return state;
   }
};

export const clearCart = () => {
   return { type: 'cart/clear' };
};

export default cartReducer;
