import { deleteUserDetails } from '@/redux/actions/userActions';
import React from 'react';
import { useSelector } from 'react-redux';
import { verifyToken } from '../pages/api/authMiddleware'; // Import your verifyToken function here
import { parse } from 'cookie';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  console.log('user', user);

  const handleDelete = () => {
    console.log('handleDelete called');
    deleteUserDetails();
    localStorage.removeItem('persist:root');
  };

  return (
    <div>
      <p>Welcome {user?.email}</p>
      <button
        onClick={handleDelete}
        className='bg-myntraPink text-[#fff] p-4 text-center'
      >
        clear user from redux
      </button>
    </div>
  );
};

export default Profile;

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
