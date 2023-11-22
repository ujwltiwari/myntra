import Layout from '@/components/Layout/Layout'
import ProductDetail from '@/components/Product/ProductDetail/ProductDetail'
import React from 'react'

const ProductDetails = () => {
  // const { loading, error, data } = useQuery(SingleProductQuery);
  // console.log('data', data);
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  )
}

export default ProductDetails
