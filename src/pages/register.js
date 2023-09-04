import { useState } from 'react';
import RegisterComp from '@/components/Auth/Register/Register';
import Navbar from '@/components/Layout/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const toastify = (message = 'Your Account Has Been Created!') => {
    toast(message, {
      icon: '👏',
      duration: 4000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        marginTop: 50,
      },
    });
  };

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
          action: 'register',
          email,
          password,
          name,
        }),
      });

      if (response.ok) {
        console.log('Registration successful', response);
        const data = await response.json();
        console.log('Registration successful:', data);
        toastify();
        setEmail('');
        setPassword('');
        setName('');
        // Redirect or show a success message
        setLoading(false);
      } else {
        const data = await response.json();
        console.error('Registration failed:', data.message);
        toastify(data.message);
        setLoading(false);
        // Handle registration error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <Toaster />
      <Navbar />
      <RegisterComp
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default Register;
