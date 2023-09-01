import Carousel from '@/components/Carousel/Carousel';
import Navbar from '@/components/Layout/Navbar/Navbar';
import React from 'react';

const Index = () => {
  return (
    <>
      <Navbar />
      {/* Sale Alert */}
      <div
        class='p-5 mb-4 text-sm text-center text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
        role='alert'
      >
        Weekend Offer Ends In 01 Day : 03 H : 36 M : 07 S
      </div>
      {/* Sale Alert */}
      {/* Main Sale Banner */}
      <div className='flex justify-center'>
        <img
          className='h-auto max-w-full'
          src='https://assets.myntassets.com/assets/images/retaillabs/2022/11/23/a8ff9dca-f24a-4eb1-9880-4fe2aa7298b91669221288328-sne-hp-banner-1440x684.jpg'
          alt='main sale banner'
        />
      </div>
      {/* Main Sale Banner */}
      {/* Carousel */}
      <div className='mt-10'></div>
      <Carousel />
      {/* Carousel */}
    </>
  );
};

export default Index;
