import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { verify } from 'jsonwebtoken';

function Profile({ user }) {
  // Your profile page component
  console.log('user', user);
  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      {/* Profile content here */}
    </div>
  );
}

export async function getServerSideProps(context) {
  var cookie = require('cookie');
  const { verifyToken } = require('./api/authMiddleware');
  // Parse the authToken from cookies
  const cookies = cookie.parse(context.req.headers.cookie || '');
  const authToken = cookies.authToken || null;
  let user = null;
  // Validate the authToken
  user = verifyToken(authToken);

  // Now, you have the user object available in the props
  return {
    props: { user },
  };
}

export default Profile;
