import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import GET_POSTS_QUERY from './AllProductQuery.gql';
import { useQuery } from '@apollo/client';
import Loader from '@/components/Loader/Loader';
const ProductsList = () => {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!loading) {
      setProducts(data.products);
    }
  }, [data, loading]);

  console.log(products);

  const Products = [
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg',
      isNew: true,
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg',
      isNew: true,
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/488007ef-c65e-4a2f-a92b-65b6846894861559989274078-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg',
      isNew: true,
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1761900/2023/6/23/520487af-e089-4664-a8f3-da5d60e037081687498323121-HIGHLANDER-by-Rohit-Sharma-Men-Navy--White-Slim-Fit-Striped--1.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      isNew: true,
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2170594/2023/4/6/c8a04ba7-7160-44dc-9d64-f22dde7ac2f81680763646051-Roadster-Men-Grey-Slub-Effect-Henley-Neck-T-shirt-9941680763-1.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2340648/2018/4/26/11524727205135-Roadster-Men-Teal-Printed-Round-Neck-T-shirt-4881524727204967-1.jpg',
      isNew: true,
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2499214/2018/5/23/3569f170-1967-46ab-9ae0-6442737f609d1527063527383-Roadster-Men-White-Printed-Round-Neck-T-shirt-4261527063525890-1.jpg',
    },
  ];
  return (
    <>
      {!products ? (
        <div className='flex items-center justify-center h-[500px]'>
          <Loader />
        </div>
      ) : (
        <div className='flex flex-wrap justify-center gap-1 sm:gap-8 mt-4'>
          {products?.map((product, idx) => (
            <SingleProduct key={idx} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
