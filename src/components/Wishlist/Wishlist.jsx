import React from 'react';
import SingleItem from './SingleItem';
import { useSelector } from 'react-redux';

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  return (
    <div className='p-12 mx-12'>
      <div className='text-[16px]'>
        <span className='font-semibold mr-2'>My Wishlist</span>
        <span>{wishlist.length} items</span>
      </div>
      <div className='flex gap-12 mt-12 pl-2'>
        {wishlist.map((item, idx) => (
          <SingleItem product={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
