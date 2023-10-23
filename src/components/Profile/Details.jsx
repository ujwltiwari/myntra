import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className='max-w-screen-md	w-[640px] mt-2'>
      <ul className='border-[1px] border-gray-300 w-full px-[100px] py-10 m-4 text-gray-500 text-[15px]'>
        <h6 className='font-semibold text-gray-900 text-[16px]'>
          Profile Details
        </h6>
        <hr class='h-px my-6 bg-gray-200 border-0 dark:bg-gray-700'></hr>

        <li className='flex gap-[90px]'>
          <p className='w-1/3 mb-6'>Full Name</p> <p>{user.name}</p>
        </li>

        <li className='flex gap-[90px]'>
          <p className='w-1/3 mb-6'>Mobile Number</p> <p>8219703902</p>
        </li>

        <li className='flex gap-[90px]'>
          <p className='w-1/3 mb-6'>Email ID</p> <p>{user.email}</p>
        </li>

        <li className='flex gap-[90px]'>
          <p className='w-1/3 mb-6'>Gender</p> <p>MALE</p>
        </li>

        <li className='flex gap-[90px]'>
          <p className='w-1/3 mb-6'>Date of Birth</p> <p>-not added-</p>
        </li>

        <li className='flex gap-[90px]'>
          <p className='w-1/3 mb-6'>Location</p> <p>-not added-</p>
        </li>
      </ul>
    </div>
  );
};

export default Details;
