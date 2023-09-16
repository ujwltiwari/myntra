import Image from 'next/image';
import React from 'react';

const EmptyCart = () => {
  const images = [
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png',
    'https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png',
  ];

  return (
    <div className='flex flex-col items-center mt-[10%]'>
      <div className='flex flex-col items-center h-[400px]'>
        <Image
          src={'/images/empty-bag.webp'}
          height={165}
          width={146}
          alt='empty-cart'
        />
        <p className='text-[18px] font-semibold'>Hey, it feels so light!</p>
        <p className='text-[13px] text-gray-500 mt-1'>
          There is nothing in your bag, Let's add some items.
        </p>
        <button className='py-3 px-2 mt-6 tracking-wider border border-1 border-myntraPink text-[13px] text-myntraPink font-bold uppercase rounded-sm'>
          Add Items From Wishlist
        </button>
      </div>

      <div className='flex justify-between items-center w-[80%] border-t-[1px] pt-2 mt-[100px] border-[#F5F5F6]'>
        <div className='flex gap-2 flex-wrap images'>
          {images.map((image, idx) => (
            <Image src={image} width={60} height={37} alt='image' key={idx} />
          ))}
        </div>
        <a href='/contactus' className='text-[13px] font-semibold'>
          <span>Need Help ? Contact Us</span>
        </a>
      </div>
    </div>
  );
};

export default EmptyCart;
