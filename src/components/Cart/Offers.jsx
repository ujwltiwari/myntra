import React, { useState } from 'react';
import Offer from '../../../public/icons/Offer';
import { MdOutlineExpandMore } from 'react-icons/md';

const Offers = () => {
  const [expanded, setExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(1);

  const offers = [
    '10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000. TCA',
    '15% Instant Discount on OneCard Credit Cards on a min spend of ₹3,000. TCA',
    '7.5% Instant Discount up to ₹750 on every spends with Myntra Kotak Credit Card. TCA',
    'Up to ₹500 Cashback on CRED pay UPI (Android Devices only) on a minimum spend of ₹1,000. TCA',
    'Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA',
    'Get upto 10% cashback on Mobikwik Wallet transaction on a min spend of ₹1500. Use Code MBK10 on Mobikwik. TCA',
    '10% Cashback upto ₹200 on Airtel Payments Bank transactions on a min spend of ₹1,000. TCA',
  ];

  const handleShow = () => {
    if (itemsToShow === 1) {
      setExpanded(true);
      setItemsToShow(offers.length);
    } else {
      setExpanded(false);
      setItemsToShow(1);
    }
  };

  return (
    <div className='flex gap-4 justify-between items-center p-4 mt-2 rounded-sm border border-bg-[#eaeaec]'>
      <div className='text-[12px] text-gray-700 leading-[22px]'>
        <span className='flex gap-3 items-center text-black font-bold'>
          <Offer />
          Available Offers
        </span>

        <ul className='flex flex-col gap-1 list-disc marker:text-gray-200 p-4'>
          {offers.slice(0, itemsToShow).map((offer, idx) => (
            <li key={idx}>{offer}</li>
          ))}
        </ul>

        <button
          className='text-myntraPink font-bold flex items-center ml-6 -mt-2 cursor-pointer'
          onClick={handleShow}
        >
          {expanded ? 'Show Less' : 'Show More'}{' '}
          <MdOutlineExpandMore size={20} />
        </button>
      </div>
    </div>
  );
};

export default Offers;
