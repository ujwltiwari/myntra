import React from 'react';
import Sidebar from './Sidebar';
import Details from './Details';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className='w-[70%] m-auto border-b-[1px] border-gray-300 pb-2'>
        <p className='font-semibold'>Account</p>
        <p className='text-[12px]'>{user.name}</p>
      </div>
      <div className='flex w-[70%] m-auto'>
        <Sidebar />
        <Details />
      </div>
    </>
  );
};

export default Profile;
