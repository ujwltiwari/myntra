import React from 'react';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromWishlist } from '@/redux/actions/wishlistActions';
import { toast, Toaster } from 'react-hot-toast';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

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

  const handleItemDelete = (item) => {
    console.log('handleItemDelete called');
    dispatch(DeleteFromWishlist(item.id));
    toastify(`${item.name.slice(0, 15 || 5)}... Deleted from Cart`, 'error');
  };

  return (
    <div className='p-12 mx-12'>
      <Toaster />
      <div className='text-[16px]'>
        <span className='font-semibold mr-2'>My Wishlist</span>
        <span>{wishlist.length} items</span>
      </div>
      <div className='flex gap-12 mt-12 pl-2'>
        {wishlist.map((item, idx) => (
          <SingleItem
            product={item}
            key={idx}
            handleItemDelete={() => handleItemDelete(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
