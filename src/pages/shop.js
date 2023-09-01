import DefaultBreadcrumb from '@/components/BreadCrumb/BreadCrumb';
import Navbar from '@/components/Layout/Navbar/Navbar';
import ProductsList from '@/components/Product/ProductsList/ProductsList';
import React from 'react';

const shop = () => {
  return (
    <div>
      <Navbar />
      <div
        class='p-5 mb-4 text-sm text-center text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
        role='alert'
      >
        Weekend Offer Ends In 01 Day : 03 H : 36 M : 07 S
      </div>
      <div className='max-w-screen-xl m-auto px-1 sm:px-10'>
        <DefaultBreadcrumb />
        {/* Current Page Name */}
        <p className='text-[14px] pt-2 px-2 md:px-0'>
          <strong>Men T-Shirts</strong> - 111273 items
        </p>
        {/* Current Page Name */}

        {/* Products */}
        <ProductsList />
        {/* Products */}
      </div>
    </div>
  );
};

export default shop;
