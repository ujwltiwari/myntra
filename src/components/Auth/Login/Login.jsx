import React from 'react';

const Login = () => {
  return (
    <div className='bg-[#FCEEEB] flex justify-center'>
      {/* Sign Offer Info */}
      <div className='max-w-[400px]'>
        <img
          src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg'
          alt=''
        />
        {/* login area */}
        <div className='bg-[#fff] p-8'>
          <h1 className='text-[18px] font-semibold'>
            Login <span className='font-normal'>or</span> Signup
          </h1>
          <div className='relative mt-8'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <span className='text-[13px]'>+91</span>&nbsp;&nbsp;
              <span className='h-[18px] w-[1px] bg-gray-400'></span>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-2.5 pl-[55px] text-sm text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-gray-200 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-200 dark:focus:border-gray-200'
              placeholder='Mobile Number'
              required
            />
          </div>
        </div>
        {/* login area */}
      </div>
      {/* Sign Offer Info */}
    </div>
  );
};

export default Login;
