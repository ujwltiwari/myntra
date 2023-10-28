import { deleteUserDetails } from '@/redux/actions/userActions';
import React from 'react';
import { useSelector } from 'react-redux';
import { parse } from 'cookie';
import Layout from '@/components/Layout/Layout';
import Profile from '@/components/Profile/Profile';
import Address from '@/components/Profile/Address/Address';
import { verifyToken } from '../api/authMiddleware';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Profile/Sidebar';

const ProfilePages = () => {
  const router = useRouter();
  const routeName = router.query.profilePages;
  const user = useSelector((state) => state.user.user);

  const handleDelete = () => {
    console.log('handleDelete called');
    deleteUserDetails();
    localStorage.removeItem('persist:root');
  };

  const pageType = [
    {
      name: 'profile',
      component: <Profile />,
    },
    {
      name: 'address',
      component: <Address />,
    },
  ];

  console.log('router', routeName == routeName[0].name);

  return (
    <Layout>
      <div className='w-[70%] m-auto border-b-[1px] border-gray-300 pb-2'>
        <p className='font-semibold'>Account</p>
        <p className='text-[12px]'>{user?.name}</p>
      </div>
      <div className='flex w-[70%] m-auto'>
        <Sidebar />

        {pageType.map((page) => {
          return routeName === page.name && page.component;
        })}
      </div>
    </Layout>
  );
};

export default ProfilePages;

export async function getServerSideProps(context) {
  try {
    // Parse the authToken from cookies
    const cookies = parse(context.req.headers.cookie || '');
    const authToken = cookies.authToken || null;

    // Validate the authToken
    const user = await verifyToken(authToken);

    // Check if the user is not authenticated
    if (user) {
      // Now, you have the user object available in the props
      return {
        props: { user }, // You can also omit the 'user' prop if you prefer
      };
    }

    // If user is authenticated, redirect
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  } catch (error) {
    console.error('error', error);
  }
}
