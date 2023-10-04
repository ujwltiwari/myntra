import React from 'react';
import Sidebar from './Sidebar';

const Profile = () => {
  return (
    <div className='flex w-[70%] m-auto'>
      <Sidebar />
      <div>Right Side</div>
    </div>
  );
};

export default Profile;
