import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Address from './Address';
import Offers from './Offers';
import SingleCartItem from './SingleCartItem';
import NotSelected from '../../../public/icons/NotSelected';
import Selected from '../../../public/icons/Selected';
import { DeleteFromCart } from '@/redux/actions/cartActions';
import { IoCartSharp } from 'react-icons/io5';
import { toast, Toaster } from 'react-hot-toast';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log('cart', cart);
  const [selectedItemIds, setSelectedItemIds] = useState([]); // Initialize selected item IDs as an array

  const toastify = (message, type) => {
    console.log('toastify called');
    toast[type](message, {
      duration: 4000,
      style: {
        // color: '#fff',
        marginTop: 50,
        width: '700px',
      },
    });
  };

  const handleSelected = (itemId) => {
    // Toggle the selection of the item
    setSelectedItemIds((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        // Item is already selected, so deselect it
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        //Item is not selected, so select it & push to selectedItemIds Array
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleAllProductSelection = () => {
    console.log('handleAllProductSelection called');
    if (selectedItemIds.length !== cart.length) {
      // select all item
      setSelectedItemIds(cart.map((x) => x.id));
    } else {
      // de-select all the items
      setSelectedItemIds([]);
    }
  };

  const handleItemDelete = (item) => {
    console.log('handleItemDelete called');
    dispatch(DeleteFromCart(item.id));
    toastify(`${item.name.slice(0, 15 || 5)}... Deleted from Cart`, 'error');
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className='flex justify-center'>
          <Toaster />
          <div className='flex flex-col md:flex-row mt-8 gap-2'>
            {/* left side */}
            <div className='w-full p-4 md:p-0 md:w-[60%] lg:w-[600px]'>
              <Address />
              <Offers />
              <div className='flex justify-between items-center gap-4 p-4 my-2'>
                <div className='flex gap-4 items-center'>
                  {/* Show Icons According to Product Selection */}
                  {cart.length === selectedItemIds.length ? (
                    <div
                      className='mr-4 -mt-4'
                      onClick={handleAllProductSelection}
                    >
                      <Selected />
                    </div>
                  ) : (
                    <>
                      {selectedItemIds.length > 0 ? (
                        <div
                          className='bulkActionStrip-selectionIcon w-[16px] fill-myntraPink cursor-pointer'
                          onClick={() => setSelectedItemIds([])}
                        >
                          <svg
                            width='16px'
                            height='16px'
                            viewBox='0 0 16 16'
                            className='bulkActionStrip-activeIcon'
                          >
                            <path
                              d='M827.006 389c1.1 0 1.994.893 1.994 1.994v12.012c0 1.1-.893 1.994-1.994 1.994h-12.012c-1.1 0-1.994-.893-1.994-1.994v-12.012c0-1.1.893-1.994 1.994-1.994zm-2.337 7.2h-7.394a.748.748 0 00-.518.209l-.17.163-.012.012a.519.519 0 00.01.734l.171.167c.14.136.327.212.522.212h7.388a.748.748 0 00.527-.217l.163-.162a.525.525 0 00-.002-.746l-.162-.158a.748.748 0 00-.523-.214z'
                              transform='translate(-813 -389)'
                              stroke='none'
                              stroke-width='1'
                              fillRule='evenodd'
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        <div
                          className='mr-4 -mt-4'
                          onClick={handleAllProductSelection}
                        >
                          <NotSelected />
                        </div>
                      )}
                    </>
                  )}
                  {/* Show Icons According to Product Selection */}
                  <p className='text-[14px] font-bold uppercase'>
                    {selectedItemIds.length} / {cart.length} Items Selected
                  </p>
                </div>
                <div className='flex gap-4 text-[11px] text-gray-600 font-bold'>
                  <button className='uppercase'>Remove</button>
                  <span className='h-[30px] w-[1px] bg-gray-300'></span>
                  <button className='uppercase'>Move to Wishlist</button>
                </div>
              </div>

              {cart.map((item, idx) => (
                <SingleCartItem
                  key={idx}
                  product={item}
                  isSelected={selectedItemIds.includes(item.id)}
                  handleSelected={() => handleSelected(item.id)}
                  handleItemDelete={() => handleItemDelete(item)}
                />
              ))}
            </div>
            {/* left side */}
            <span className='h-full w-[1px] bg-[#eaeaec] ml-1'></span>
            {/* right side */}
            <div className='lg:w-[300px]'>
              <h1 className='text-[25px] font-semibold'>Right Side</h1>
            </div>
            {/* right side */}
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
