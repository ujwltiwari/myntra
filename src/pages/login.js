import Login from '@/components/Auth/Login/Login';
import Navbar from '@/components/Layout/Navbar/Navbar';
import { fetchUserDetails } from '@/redux/actions/userActions';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyToken } from '../pages/api/authMiddleware'; // Import your verifyToken function here
import { parse } from 'cookie';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

function Register({ fetchUserDetails, userDetails, user }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('userDetails', userDetails);
  console.log('user', user);

  const toastify = (message, type) => {
    if (type === 'error') {
      toast.error(message, {
        duration: 4000,
        style: {
          background: '#333',
          color: '#fff',
          marginTop: 50,
        },
      });
    } else {
      toast(message, {
        icon: '👏',
        duration: 4000,
        style: {
          background: '#333',
          color: '#fff',
          marginTop: 50,
        },
      });
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'login',
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('Registration successful:', data);
        fetchUserDetails(data.uid);
        // Redirect or show a success message
        router.push('/profile');
        setLoading(false);
        toastify('Successfully Logged In', 'success');
      } else {
        const data = await response.json();
        // Handle registration error, e.g., show an error message
        console.error('Registration failed:', data.message);
        toastify(data.message, 'error');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <Login
        email={email}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  userDetails: state.user, // Assuming your user details are stored in the "user" slice of the Redux store
});

const mapDispatchToProps = {
  fetchUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

export async function getServerSideProps(context) {
  try {
    // Parse the authToken from cookies
    const cookies = parse(context.req.headers.cookie || '');
    const authToken = cookies.authToken || null;

    // Validate the authToken
    const user = await verifyToken(authToken);

    // Check if the user is not authenticated
    if (!user) {
      // Now, you have the user object available in the props
      return {
        props: { user: null }, // You can also omit the 'user' prop if you prefer
      };
    }

    // If user is authenticated, redirect
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } catch (error) {
    console.error('error', error);
  }
}
