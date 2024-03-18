import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
   const discpatch = useDispatch();
   return (
      <aside className='modal-container'>
         <div className='modal'>
            <h4>remove all items from your shopping cart?</h4>
            <div className='btn-container'>
               <button
                  type='button'
                  className='btn confirm-btn'
               >
                  confirm
               </button>
               <button
                  type='button'
                  className='btn clear-btn'
                  onClick={() => discpatch(closeModal())}
               >
                  cancel
               </button>
            </div>
         </div>
      </aside>
   );
};
export default Modal;
