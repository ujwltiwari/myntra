// lib/cookies.js
import { serialize, parse } from 'cookie';

export function setTokenCookie(res, token) {
  const cookieOptions = {
    httpOnly: true, // The cookie cannot be accessed via JavaScript
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'strict', // Enforce same-site attribute
    maxAge: 3600, // Token expiration time in seconds (adjust as needed)
    path: '/', // Cookie path (adjust as needed)
  };

  const tokenName = 'authToken'; // Adjust the cookie name as needed

  const serializedToken = serialize(tokenName, token, cookieOptions);
  res.setHeader('Set-Cookie', [serializedToken]);
}
