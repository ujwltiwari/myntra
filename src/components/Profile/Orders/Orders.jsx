import { useQuery } from '@apollo/client'
import React from 'react'
import USER_ORDER_QUERY from '../graphql/UserOrderQuery.gql'
import Loader from '../../Loader/Loader'
import SingleOrderCard from './SingleOrderCard'
const Orders = ({ user }) => {
  const { data, loading, error } = useQuery(USER_ORDER_QUERY, {
    variables: {
      userId: user.id,
    },
  })
  console.log('orders', data)
  return (
    <>
      {loading ? (
        <div className='flex h-full mt-[100px] w-full justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <div className='w-full p-4 bg-[#F5F5F5]'>
          {data.orders.length === 0 ? (
            <p>No Orders</p>
          ) : (
            data?.orders.map((order, idx) => (
              <SingleOrderCard order={order} key={idx} />
            ))
          )}
        </div>
      )}
    </>
  )
}

export default Orders
