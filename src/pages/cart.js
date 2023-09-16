import CartNavbar from '@/components/Layout/Navbar/CartNavbar';
import Cart from '@/components/Cart/Cart';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { verifyToken } from '../pages/api/authMiddleware'; // Import your verifyToken function here
import { parse } from 'cookie';

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log('cart', cart);
  return (
    <>
      <Head>
        <title>SHOPPING BAG</title>
      </Head>
      <>
        <CartNavbar />
        <Cart />
      </>
    </>
  );
};

export default CartPage;
