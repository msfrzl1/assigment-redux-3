import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import CartItem from './CartItem';
import Modal from './Modal';

const CartContainer = () => {
   const dispatch = useDispatch();
   const amount = 2;
   const isOpen = useSelector((store) => store.modal.isOpen);
   const cartItems = useSelector((store) => store.cart.cartItems);
   const total = useSelector((store) => store.cart.totalPrice);

   if (amount < 1) {
      return (
         <section className='cart'>
            <header>
               <h2>your bag</h2>
               <h4 className='empty-cart'>is currently empty</h4>
            </header>
         </section>
      );
   }

   return (
      <section className='cart'>
         <header>
            <h2>your bag</h2>
         </header>
         <div>
            {cartItems.map((item) => {
               return (
                  <CartItem
                     key={item.id}
                     {...item}
                  />
               );
            })}
         </div>
         <footer>
            <hr />
            <div className='cart-total'>
               <h4>
                  total <span>${total.toFixed(2)}</span>
               </h4>
            </div>
            <button
               className='btn clear-btn'
               onClick={() => dispatch(openModal())}
            >
               clear cart
            </button>
         </footer>
         {isOpen && <Modal />}
      </section>
   );
};

export default CartContainer;
