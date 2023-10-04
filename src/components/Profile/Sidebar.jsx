import React from 'react';

const Sidebar = () => {
  const profileMenu = [
    {
      name: 'Overview',
      link: '/dashboard',
    },
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
      name: 'credits',
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
  return <div>Sidebar</div>;
};

export default Sidebar;
