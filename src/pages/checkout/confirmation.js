import CartNavbar from '@/components/Layout/Navbar/CartNavbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const ThankYou = () => {
  const { selectedCartItems } = useSelector((state) => state.cart)
  return (
    <>
      <CartNavbar />
      <div className='flex max-w-[340px] m-auto flex-col items-center justify-center mt-12'>
        <div className='flex flex-col items-center'>
          <Image
            width={80}
            height={80}
            src='https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png'
            alt='tick'
          />
          <p className='font-semibold mt-4'>Order Confirmed</p>
        </div>
        <hr className='h-[2px] w-full my-6 bg-gray-300 border-0 dark:bg-gray-700'></hr>
        <div className='mb-3 font-medium text-[15px]'>
          Thank You For Shopping With us. You Order {selectedCartItems.length}{' '}
          items
        </div>
        {selectedCartItems.map((item, idx) => (
          <ItemCard item={item} key={idx} />
        ))}
        <Link href={'/orders'} className='w-full'>
          <button className='bg-myntraPink text-gray-50 w-full rounded-md p-2'>
            Done
          </button>
        </Link>
      </div>
    </>
  )
}

export default ThankYou

export const ItemCard = ({ item }) => {
  return (
    <div className='flex gap-4 mb-4 bg-gray-100 rounded-md p-2'>
      <Image width={50} height={50} src={item.image} alt='' />
      <p className='text-[13px] font-semibold'>{item.name}</p>
    </div>
  )
}
