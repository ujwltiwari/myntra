import Login from '@/components/Auth/Login/Login';
import Layout from '@/components/Layout/Layout';
import {
  deleteUserDetails,
  fetchUserDetails,
} from '@/redux/actions/userActions';
import { Navbar } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Register({ fetchUserDetails, userDetails }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // useEffect(() => {
  //   // Dispatch the action to fetch user details when the component mounts
  //   fetchUserDetails(UID);
  // }, [fetchUserDetails, UID]);

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
        console.log('response', response);
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.error('Registration successful:', data);
        fetchUserDetails(data.uid);
        // Redirect or show a success message
      } else {
        const data = await response.json();
        console.error('Registration failed:', data.message);
        // Handle registration error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  const handleDeleteUser = () => {
    deleteUserDetails();
  };

  return (
    <>
      <Layout>
        <Login />
      </Layout>
      {/* <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type='submit'>Register</button>
        <button onClick={handleDeleteUser}>Delete User Details</button>
      </form>
    </div> */}
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
