import { verify } from 'jsonwebtoken';

export const verifyToken = (authToken) => {
  // Validate the authToken
  let user = null;
  if (authToken) {
    try {
      user = verify(
        authToken,
        'dc2bpmvwvEpNGXI7gmAWxjyLY3D2sIYSvW8lvzF7lh344dZWaAwB98Nu99pRpIak'
      ); // Replace with your actual secret key
      console.log('token verified');
      return user;
    } catch (error) {
      // Token is invalid or has expired
      console.error('Error validating token:', error);
    }
  }
};
