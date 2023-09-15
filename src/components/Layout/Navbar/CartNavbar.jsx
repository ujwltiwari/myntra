import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';

const CartNavbar = () => {
  const MenuItems = [
    {
      name: 'Men',
      link: '/shop',
    },
    {
      name: 'Women',
      link: '/shop',
    },
    {
      name: 'Kids',
      link: '/shop',
    },
    {
      name: 'Home & Living',
      link: '/shop',
    },
    {
      name: 'Beauty',
      link: '/shop',
    },
    {
      name: 'Studio',
      link: '/shop',
    },
  ];

  const ProfileItems = [
    {
      name: 'Profile',
      link: '/profile',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <g fill='none' stroke='currentColor' stroke-width='1.5'>
            <circle cx='12' cy='6' r='4' />
            <path
              stroke-linecap='round'
              d='M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437'
            />
          </g>
        </svg>
      ),
    },
    {
      name: 'Wishlist',
      link: '/shop',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 256 256'
        >
          <path
            fill='currentColor'
            d='M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z'
          />
        </svg>
      ),
    },
    {
      name: 'Bag',
      link: '/cart',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.25 7.25v-.12a4.75 4.75 0 1 1 9.5 0v.12h1.501c.571 0 1.056.419 1.14.984l.218 1.493c.43 2.938.43 5.924 0 8.862a3.135 3.135 0 0 1-2.779 2.664l-.629.065a40.68 40.68 0 0 1-8.402 0l-.629-.065a3.135 3.135 0 0 1-2.779-2.664a30.565 30.565 0 0 1 0-8.862l.219-1.493a1.151 1.151 0 0 1 1.139-.984H7.25Zm3.94-3.267a3.25 3.25 0 0 1 4.06 3.147v.12h-6.5v-.12a3.25 3.25 0 0 1 2.44-3.147ZM7.25 8.75V11a.75.75 0 0 0 1.5 0V8.75h6.5V11a.75.75 0 0 0 1.5 0V8.75h1.2l.175 1.194a29.098 29.098 0 0 1 0 8.428a1.635 1.635 0 0 1-1.45 1.39l-.629.064c-2.69.28-5.402.28-8.092 0l-.63-.065a1.635 1.635 0 0 1-1.449-1.39a29.067 29.067 0 0 1 0-8.427L6.05 8.75h1.2Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ];

  const MobileItems = [
    {
      name: 'Search',
      link: '/shop',
      icon: <IoSearchOutline size={25} />,
    },
    {
      name: 'Profile',
      link: '/shop',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 24 24'
        >
          <g fill='none' stroke='currentColor' stroke-width='1.5'>
            <circle cx='12' cy='6' r='4' />
            <path
              stroke-linecap='round'
              d='M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437'
            />
          </g>
        </svg>
      ),
    },
    {
      name: 'Wishlist',
      link: '/shop',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 256 256'
        >
          <path
            fill='currentColor'
            d='M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z'
          />
        </svg>
      ),
    },
    {
      name: 'Bag',
      link: '/shop',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.25 7.25v-.12a4.75 4.75 0 1 1 9.5 0v.12h1.501c.571 0 1.056.419 1.14.984l.218 1.493c.43 2.938.43 5.924 0 8.862a3.135 3.135 0 0 1-2.779 2.664l-.629.065a40.68 40.68 0 0 1-8.402 0l-.629-.065a3.135 3.135 0 0 1-2.779-2.664a30.565 30.565 0 0 1 0-8.862l.219-1.493a1.151 1.151 0 0 1 1.139-.984H7.25Zm3.94-3.267a3.25 3.25 0 0 1 4.06 3.147v.12h-6.5v-.12a3.25 3.25 0 0 1 2.44-3.147ZM7.25 8.75V11a.75.75 0 0 0 1.5 0V8.75h6.5V11a.75.75 0 0 0 1.5 0V8.75h1.2l.175 1.194a29.098 29.098 0 0 1 0 8.428a1.635 1.635 0 0 1-1.45 1.39l-.629.064c-2.69.28-5.402.28-8.092 0l-.63-.065a1.635 1.635 0 0 1-1.449-1.39a29.067 29.067 0 0 1 0-8.427L6.05 8.75h1.2Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ];
  return (
    <nav className='bg-white border-gray-100 dark:bg-gray-900 dark:border-gray-700 border-b-[1px] p-5 flex gap-2 justify-between'>
      <Image
        src={'/images/myntra.webp'}
        width={60}
        height={25}
        alt='myntra'
        className='md:ml-10 w-[54px] h-auto md:w-[60px]'
      />

      {/* Menu Items */}
      <ul className='hidden gap-6 items-center sm:flex'>
        <li className='tracking-widest text-[#20BD99] text-[12px] uppercase font-semibold border-b-2 border-[#20BD99] '>
          Bag
        </li>
        <li
          className='h-[4px] w-[50px]'
          style={{
            display: 'inline-block',
            borderTop: '1px dashed #696B79',
            height: '4px',
            width: '50px',
            maxWidth: '200px',
          }}
        />
        <li className='tracking-widest text-gray-600 text-[12px] uppercase font-semibold '>
          Address
        </li>
        <li
          className='h-[4px] w-[50px]'
          style={{
            display: 'inline-block',
            borderTop: '1px dashed #696B79',
            height: '4px',
            width: '50px',
            maxWidth: '200px',
          }}
        />
        <li className='tracking-widest text-gray-600 text-[12px] uppercase font-semibold'>
          Payment
        </li>
      </ul>
      {/* Menu Items */}

      <div className='flex items-center gap-2'>
        <img
          src='https://constant.myntassets.com/checkout/assets/img/sprite-secure.png'
          className='secureIcon'
          width='26'
          height='28'
        />
        <div className='text-[12px] font-semibold tracking-widest'>
          100% SECURE
        </div>
      </div>
    </nav>
  );
};

export default CartNavbar;
