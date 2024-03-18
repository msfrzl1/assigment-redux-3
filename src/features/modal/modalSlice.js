const initialState = {
   isOpen: false,
};

const modalReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'modal/open':
         return { ...state, isOpen: true };
      case 'modal/close':
         return { ...state, isOpen: false };
      default:
         return state;
   }
};

export const openModal = () => {
   return { type: 'modal/open' };
};

export const closeModal = () => {
   return { type: 'modal/close' };
};

export default modalReducer;
