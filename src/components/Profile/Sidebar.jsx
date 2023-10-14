import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const profileMenu = [
    {
      title: 'Orders',
      subMenu: [
        {
          name: 'Orders & Returns',
          link: '/orders',
        },
      ],
    },
    {
      title: 'credits',
      subMenu: [
        {
          name: 'Coupons',
          link: '/coupons',
        },
        {
          name: 'Myntra Credit',
          link: 'myntracredit',
        },
        {
          name: 'MynCash',
          link: 'myntrapoints',
        },
      ],
    },
    {
      title: 'Account',
      subMenu: [
        {
          name: 'Saved Cards',
          link: '/savedcards',
        },
        {
          name: 'Saved UPI',
          link: '/savedvpa',
        },
        {
          name: 'Saved Wallets/BNPL',
          link: '/savedwalletsbnpl',
        },
        {
          name: 'Addresses',
          link: '/addresses',
        },
        {
          name: 'Myntra Insider',
          link: '/myntrainsider',
        },
      ],
    },
  ];
  return (
    <div className='border-r-[1px] border-gray-300 pr-4'>
      {profileMenu.map((menu) => {
        return (
          <>
            <hr class='h-px my-6 bg-gray-300 border-0 dark:bg-gray-700'></hr>
            <p className='text-[11px] text-gray-400 uppercase mb-4 '>
              {menu.title}
            </p>
            <ul>
              {menu.subMenu.map((item, idx) => (
                <li
                  key={idx}
                  className='text-[14px] text-gray-700 font-light mb-1'
                >
                  <Link href={`/my/${item.link}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
