import { sign } from 'jsonwebtoken';
var jwt = require('jsonwebtoken');
import { handleRegistration } from '@/lib/registerUser';
import argon2 from 'argon2';
import { handleUserRetrieval } from '@/lib/getUser';
import { setTokenCookie } from '@/lib/cookie';

export default async function handler(req, res) {
  const { action, email, password, name } = req.body;
  if (req.method === 'POST') {
    try {
      if (action === 'register') {
        console.log('name', name);
        // Hash the password using argon2
        const hashedPassword = await argon2.hash(password);

        const registrationResult = await handleRegistration(
          email,
          hashedPassword,
          name
        );

        console.log(registrationResult);

        if (registrationResult.error) {
          return res.status(400).json({
            message: 'Registration failed',
            error: registrationResult.error,
          });
        }

        res.status(200).json({
          message: 'Registration successful',
          data: registrationResult,
        });
      } else if (action === 'login') {
        console.log('password', password);
        // Fetch the user from the database
        const user = await handleUserRetrieval(email);
        console.log('user', user.data.users[0]);

        if (user.data.users.length === 0) {
          return res.status(401).json({ message: 'User not found' });
        }

        // Verify the password using argon2
        const passwordMatch = await argon2.verify(
          user.data.users[0].password,
          password
        );

        if (!passwordMatch) {
          console.log('password not matched');
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token for the authenticated user
        const token = sign(
          { userId: user.data.users[0].id },
          process.env.JWT_SECRET, // Use environment variable for the secret
          {
            expiresIn: '365d', // Token expiration time
          }
        );

        setTokenCookie(res, token);
        res.status(200).json({ token, uid: user.data.users[0].id });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.status(405).end();
  }
}
