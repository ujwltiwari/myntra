import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div
        class='p-5 mb-4 text-sm text-center text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
        role='alert'
      >
        Weekend Offer Ends In 01 Day : 03 H : 36 M : 07 S
      </div>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
