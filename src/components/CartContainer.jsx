import { useDispatch, useSelector } from 'react-redux';
import cartItems from '../cartItems';
import CartItem from './CartItem';
import Modal from './Modal';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
   const amount = 2;
   const dispatch = useDispatch();
   const isOpen = useSelector((store) => store.modal.isOpen);

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
                  total <span>$0</span>
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
