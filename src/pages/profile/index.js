import { deleteUserDetails } from '@/redux/actions/userActions';
import React from 'react';
import { useSelector } from 'react-redux';
import { parse } from 'cookie';
import Layout from '@/components/Layout/Layout';
import Profile from '@/components/Profile/Profile';
import Address from '@/components/Profile/Address/Address';
import { verifyToken } from '../api/authMiddleware';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const actualPath = router.pathname.replace('/my/', '');
  console.log('router', actualPath);

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

  return (
    <Layout>
      {pageType.map((page) => {
        console.log('router page match', page === actualPath);
        return page.name === actualPath && page.component;
      })}
      {/* <Profile /> */}
    </Layout>
  );
};

export default Index;

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
