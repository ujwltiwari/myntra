import React, {useEffect, useState} from 'react'
import RazorPayBtn from './RazorPayBtn'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { ddyymm } from '@/utils/dateFormat'
const Payment = () => {
  const { selectedCartItems } = useSelector((state) => state.cart)
  const [items, setItems] = useState([])
  const router = useRouter()
  const routeName = router.query.checkoutPages
  console.log('route', router)
  console.log("selectedCartItems", selectedCartItems)
  const cartTotal = selectedCartItems.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)
  console.log('cart total', cartTotal)
  const discountTotal = selectedCartItems.reduce((prevSum, currVal) => {
    return prevSum + currVal.discount
  }, 0)
  const discount = (cartTotal * discountTotal) / 100
  console.log('discount', discount)
  const total = cartTotal - discount

  useEffect(() => {

  }, [selectedCartItems]);

  return (
    <div
      className={routeName == 'payment' ? 'max-w-[500px] w-[90%] m-auto' : null}
    >
      {routeName === 'address' && (
        <div className='mt-8'>
          {selectedCartItems.map((item, idx) => {
            return <ItemCard key={idx} item={item} />
          })}
        </div>
      )}
      <ul className='text-[13px] flex flex-col gap-2 mt-[50px] w-full mb-2'>
        <li className='uppercase font-semibold'>
          Price Details ({selectedCartItems.length}{' '}
          {selectedCartItems.length > 1 ? 'Items' : 'Item'})
        </li>
        <li className='flex justify-between'>
          <p>Total MRP</p>
          <p>₹{cartTotal}</p>
        </li>
        <li className='flex justify-between'>
          <p>Discount on MRP</p>
          <p className='text-[#03a685]'> -₹{discount}</p>
        </li>
        <li className='flex justify-between'>
          <p>
            Convenience Fee{' '}
            <span className='text-myntraPink font-semibold'>Know More</span>
          </p>
          <p>
            <span className='line-through mr-1'>₹99</span>
            <span>₹20</span>
          </p>
        </li>
        <hr />
        <p className='flex justify-between text-[14px] mt-2 font-semibold'>
          <span>Total Amount</span>
          <span>₹{total.toFixed(2)}</span>
        </p>
        {routeName !== 'payment' && (
          <button
            className='bg-myntraPink w-full text-[13px] h-[40px] tracking-widest text-gray-50 p-2 uppercase font-semibold'
            onClick={() =>
              router.push(
                `/checkout/${routeName === 'cart' ? 'address' : 'payment'}`
              )
            }
          >
            {routeName === 'address' ? 'Continue' : 'Place Order'}
          </button>
        )}
        {routeName == 'payment' && (
          <RazorPayBtn total={total} discountTotal={discountTotal} />
        )}
      </ul>
    </div>
  )
}

export default Payment

export const ItemCard = ({ item }) => {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return (
    <Link href={`/product-detail/${item.id}`} target='_blank'>
      <div className='flex gap-4 mb-4 bg-gray-100 rounded-md p-2'>
        <Image width={50} height={50} src={item.image} alt='' />
        <p className='text-[14px] flex flex-col gap-1'>
          <span>Delivery Between</span>
          <span className='text-[13px] text-gray-500'>
            {ddyymm(new Date())} - {ddyymm(new Date(), 7)}
          </span>
        </p>
      </div>
    </Link>
  )
}
