import { deleteUserDetails } from '@/redux/actions/userActions'
import React from 'react'
import { useSelector } from 'react-redux'
import { parse } from 'cookie'
import Layout from '@/components/Layout/Layout'
import Profile from '@/components/Profile/Profile'
import Address from '@/components/Profile/Address/Address'
import { verifyToken } from '../api/authMiddleware'
import { useRouter } from 'next/router'
import Sidebar from '@/components/Profile/Sidebar'
import Cart from '@/components/Cart/Cart'
import Payment from '@/components/Cart/Payment'
import CartNavbar from '@/components/Layout/Navbar/CartNavbar'

const CheckoutPages = () => {
  const { cart } = useSelector((state) => state.cart)
  const router = useRouter()
  const routeName = router.query.checkoutPages
  const user = useSelector((state) => state.user.user)

  const handleDelete = () => {
    console.log('handleDelete called')
    deleteUserDetails()
    localStorage.removeItem('persist:root')
  }

  const pageType = [
    {
      name: 'cart',
      component: <Cart />,
    },
    {
      name: 'address',
      component: <Address route={'checkout'} />,
    },
    {
      name: 'payment',
      component: <Payment cart={cart} />,
    },
  ]

  return (
    <>
      <CartNavbar activeTab={routeName} />
      <div className={routeName === 'address' ? 'flex justify-center' : null}>
        <div className={routeName === 'address' ? 'w-[65%]' : null}>
          {pageType.map((page, idx) => {
            return (
              <div key={idx}>{routeName === page.name && page.component}</div>
            )
          })}
        </div>
        {routeName === 'address' && (
          <div className='w-[30%] mt-12'>
            <Payment cart={cart} route={routeName} />
          </div>
        )}
      </div>
    </>
  )
}

export default CheckoutPages

export async function getServerSideProps(context) {
  try {
    // Parse the authToken from cookies
    const cookies = parse(context.req.headers.cookie || '')
    const authToken = cookies.authToken || null

    // Validate the authToken
    const user = await verifyToken(authToken)

    // Check if the user is not authenticated
    if (user) {
      // Now, you have the user object available in the props
      return {
        props: { user }, // You can also omit the 'user' prop if you prefer
      }
    }

    // If user is authenticated, redirect
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } catch (error) {
    console.error('error', error)
  }
}
