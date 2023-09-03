import Login from '@/components/Auth/Login/Login';
import Navbar from '@/components/Layout/Navbar/Navbar';
import { fetchUserDetails } from '@/redux/actions/userActions';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { connect } from 'react-redux';

function Register({ fetchUserDetails, userDetails }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('userDetails', userDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
      } else {
        const data = await response.json();
        // Handle registration error, e.g., show an error message
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <>
      <Navbar />
      <Login
        email={email}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
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
