import React, { useEffect, useState } from 'react'
import Box from '../../../../public/icons/Box'
import { DateMonth, DayDateMonth, ddyymm } from '@/utils/dateFormat'
import Image from 'next/image'
import ORDERED_PRODUCTS_QUERY from '../graphql/OrderedProductsQuery.gql'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import Rating from '@/components/Rating/Rating'

const SingleOrderCard = ({ order }) => {
  console.log('order', order)
  const [products, setProducts] = useState(null)
  const { data, loading, error } = useQuery(ORDERED_PRODUCTS_QUERY, {
    variables: {
      productsIds: order.productsId,
    },
  })
  console.log('orderedProduct', error)

  useEffect(() => {
    if (!loading && data) {
      setProducts([...data.products])
    }
  }, [data, loading])

  return (
    <div className='flex flex-col gap-4'>
      {/* Product Details */}
      {products?.map((product, idx) => (
        <div key={idx} className='p-2 bg-white'>
          {/* Status and Date */}
          <div className='flex items-center gap-4 m-4'>
            <div className='ItemStatus-circleBackgroundIconWithStatus w-[32px] h-full pt-[1px]'>
              <div
                className='CustomStatusIcon-circleBackgroundIconWithStatus'
                style={{ background: 'rgb(40, 44, 63)' }}
              >
                <div className='CustomStatusIcon-status'>
                  <Box />
                </div>
                <span className='svgImages-svg svgImages-tick CustomStatusIcon-statusIcon'></span>
              </div>
            </div>
            <div className='flex flex-col justify-center gap-0'>
              <span className='text-[14px] font-medium text-[#03a685]'>
                {order.status}
              </span>
              <span className='text-gray-500 text-[12px]'>
                On {DayDateMonth(order.createdAt)}
              </span>
            </div>
          </div>
          {/* Status and Date */}
          <div key={idx} className='bg-[#F5F5F5] mt-4 flex flex-col'>
            <div className='px-4 py-3 flex gap-4 hover:bg-gray-200 cursor-pointer'>
              <Link href={`/product-detail/${order.id}`} target='_blank'>
                <Image
                  className='cursor-pointer'
                  src={product.image}
                  width={60}
                  height={60}
                  alt=''
                />
              </Link>
              <div className='text-[13px] text-gray-400'>
                <p className='text-[14px] font-medium text-gray-900'>
                  {product.brand}
                </p>
                <p>{product.name}</p>
                <p>Size: {product.sizes[0]}</p>
              </div>
            </div>

            <div className='emptySpace p-[1px] bg-white'></div>
            <div className='px-4 py-3 flex gap-4 items-center'>
              <div className='w-[8px] h-[8px] bg-[#696E79] rounded-full'></div>
              <p className='text-[13px] text-gray-500'>
                Exchange/Return window closed on {DateMonth(order.createdAt, 7)}
              </p>
            </div>

            <div className='emptySpace p-[1px] bg-white'></div>

            <div className='text-[14px] text-gray-500 py-3 px-4 flex gap-4 items-center'>
              <p>Rate Product</p>
              <Rating />
            </div>
          </div>
        </div>
      ))}
      {/* Product Details */}
    </div>
  )
}

export default SingleOrderCard
