import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import Mail from '../../../../public/icons/Mail';
import Password from '../../../../public/icons/Password';
import Image from 'next/image';

const Login = ({ email, setEmail, setPassword, handleSubmit }) => {
  console.log('email', email);

  return (
    <div className='bg-[#FCEEEB] flex justify-center p-8'>
      {/* Sign Offer Info */}
      <div className='max-w-[400px] h-[100vh]'>
        <Image
          width={400}
          height={160}
          src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg'
          alt=''
        />
        {/* login area */}
        <div className='bg-[#fff] p-8 h-[65%]'>
          <h1 className='text-[18px] font-semibold'>
            Login <span className='font-normal'>or</span> Signup
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='relative mt-8'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <Mail />
                &nbsp;&nbsp;
                <span className='h-[18px] w-[1px] bg-gray-400'></span>
              </div>
              <input
                type='email'
                id='email'
                className='block w-full p-2.5 pl-[55px] text-sm caret-pink-500 text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-gray-200 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-200 dark:focus:border-gray-200'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='relative mt-4'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <Password />
                &nbsp;&nbsp;
                <span className='h-[18px] w-[1px] bg-gray-400'></span>
              </div>
              <input
                type='password'
                id='password'
                className='block w-full p-2.5 pl-[55px] text-sm caret-pink-500 text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-gray-200 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-200 dark:focus:border-gray-200'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='mt-6 text-[12px]'>
              By continuing, I agree to the{' '}
              <a className='text-myntraPink font-semibold' href='/termsofuse'>
                Terms of Use
              </a>{' '}
              &amp;{' '}
              <a
                className='text-myntraPink font-semibold'
                href='/privacypolicy'
              >
                Privacy Policy
              </a>
            </div>
            <Button
              type='submit'
              className='mt-6 w-full uppercase bg-myntraPink rounded-sm'
            >
              continue
            </Button>
          </form>
          <div className='mt-6 text-[12px]'>
            Have trouble logging in?{' '}
            <span className='font-semibold text-myntraPink'>Get help</span>
          </div>
        </div>
        {/* login area */}
      </div>
      {/* Sign Offer Info */}
    </div>
  );
};

export default Login;
