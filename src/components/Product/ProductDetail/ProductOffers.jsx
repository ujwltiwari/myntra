import React from 'react';
import Discount from '../../../../public/icons/Discount';

const ProductOffers = ({ initialStyle }) => {
  const offers = [
    {
      code: 'MYNTRA200',
      discount: 'Rs. 52 off (check cart for final savings)',
      applicableOn: 1099,
      firstTime: true,
    },
    {
      title: '12.5% Instant Discount on Myntra Kotak Credit Card.',
      applicableOn: 3000,
      maxDiscount: 750,
    },
    {
      title: 'UpTo ₹500 Cashback on CRED pay UPI transactions.',
      applicableOn: 1000,
    },
  ];
  return (
    <div style={initialStyle} className='mb-4'>
      <div className='flex gap-2 items-center'>
        <span className='text-[14px] font-semibold uppercase'>Best Offers</span>
        <span>
          <Discount />
        </span>
      </div>

      {offers.map((offer, idx) => {
        return (
          <ul key={idx} className='text-[14px] leading-7 mt-4'>
            {offer.code && (
              <li>
                Coupon Code: <span className='font-semibold'>{offer.code}</span>
              </li>
            )}
            {offer.title && (
              <li className='list-disc'>
                <span className='font-bold'>{offer.title}</span>
              </li>
            )}
            {offer.discount && (
              <li>
                Coupon Discount: <span>{offer.discount}</span>
              </li>
            )}
            <li>Applicable On: Orders above Rs. {offer.applicableOn}</li>
            <li className='text-[13px] font-bold text-[#FF3E6C] cursor-pointer'>
              Terms & Condition
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductOffers;
