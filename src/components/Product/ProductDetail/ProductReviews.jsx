import React from 'react';
import Stars from '../../../../public/icons/Stars';
import { HiStar } from 'react-icons/hi';
import { Progress } from 'flowbite-react';
import Image from 'next/image';

const ProductReviews = () => {
  const reviews = [
    {
      images: [
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/3/27/734595d9-8cdf-4d8c-8515-30b1fa0451e61648376777493-IMG_20220327_154043.jpg',
      ],
      name: 'Aadarsh Lodhi',
      date: '6 Apr 2022',
      review: 'Product on this price range is too good',
      rating: '5',
    },
    {
      images: [
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2021/9/1/fa77e70e-e1b2-4edc-8e04-1b5a4f7439461630488778802-IMG20210901145917.jpg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/4/6/e349b55f-ca4d-485c-98d5-d3376093a1281649223096333-E6F0FA52-CA37-4AC3-AA08-1FA33A544A88.jpeg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/4/6/47244385-b65e-4079-8c09-f6bba7ab9a691649223098047-341C31DA-A3D5-4AEF-A5D6-225E341C53D8.jpeg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/4/6/cea77ca1-155a-4987-ad59-45c3dab643a61649223095195-A4DB662C-012A-4A4D-8FBC-7393335F53F8.jpeg',
      ],
      name: 'Myntra Customer',
      date: '13 Apr 2023',
      review:
        'Roadster size chart was good as expceted and as always, it was a great product, but it was a bit loss which is a good and bad thing a a same time. It was to comfertable and at the same time a bit lose, and on the positive side from my prospective I love a bit loss clothes. So i found it a great product for me at this price piont of view',
      rating: '4',
    },
    {
      images: [
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2020/6/1/83e9e9dc-b1f6-467e-9eb6-667948a5536c1590998328201-IMG20200601100412.jpg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2020/6/1/ca95938e-2b7c-410c-a489-eee40b7a50151590998327792-IMG20200531100931.jpg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2020/6/1/cd1c501f-8bd2-484f-a7ae-6462673c11dc1590998327083-IMG20200531100939.jpg',
      ],
      name: 'Jaskaran Singh',
      date: '1 June 2020',
      review:
        'I bought it for 200 Rupees. And it very good at this price point. Size is as expected.      ',
      rating: '5',
    },
    {
      images: [
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2021/9/1/fa77e70e-e1b2-4edc-8e04-1b5a4f7439461630488778802-IMG20210901145917.jpg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/4/6/e349b55f-ca4d-485c-98d5-d3376093a1281649223096333-E6F0FA52-CA37-4AC3-AA08-1FA33A544A88.jpeg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/4/6/47244385-b65e-4079-8c09-f6bba7ab9a691649223098047-341C31DA-A3D5-4AEF-A5D6-225E341C53D8.jpeg',
        'https://assets.myntassets.com/w_600,q_80,c_thumb,fl_progressive/assets/images/2022/4/6/cea77ca1-155a-4987-ad59-45c3dab643a61649223095195-A4DB662C-012A-4A4D-8FBC-7393335F53F8.jpeg',
      ],
      name: 'Himanshu Kumbhaj',
      date: '14 Nov 2021',
      review:
        'Very good product , I brought it for 149rs in navratri offer although it is worthit in a little more higher range I orderd m size and fitting is good a little loose but its neglagible go for it Right one is L size Left one is M size      ',
      rating: '4.5',
    },
  ];
  return (
    <div>
      <div className='flex gap-2 items-center' style={{ marginTop: 80 }}>
        <span className='text-[15px] uppercase font-semibold'>Ratings</span>
        <span>
          <Stars />
        </span>
      </div>

      {/* Rating */}
      <div className='flex gap-8 mt-8'>
        <div className='flex flex-col gap-8'>
          <div className='flex gap-4 items-center'>
            <span>4.2</span>
            <HiStar color='green' size={30} />
          </div>
          <p className='text-[13px] mt-[-14px]'>42.7k Verified Buyers</p>
        </div>
        <span className='h-100 w-[1px] bg-gray-300'></span>
        {/* Progress Bar */}
        <div className='flex-1'>
          <div className='flex items-center gap-2 mb-1'>
            <span className='flex items-center text-[13px] gap-1'>
              5 <HiStar color='#D5D5DA' size={14} />
            </span>
            <Progress
              color='indigo'
              progress={45}
              size='sm'
              className='w-[120px] '
            />
            <p className='text-[12px]'>23421</p>
          </div>
          <div className='flex items-center gap-2 mb-1'>
            <span className='flex items-center text-[13px] gap-1'>
              4 <HiStar color='#D5D5DA' size={14} />
            </span>
            <Progress
              color='green'
              progress={25}
              size='sm'
              className='w-[120px] '
            />
            <p className='text-[12px]'>10101</p>
          </div>
          <div className='flex items-center gap-2 mb-1'>
            <span className='flex items-center text-[13px] gap-1'>
              3 <HiStar color='#D5D5DA' size={14} />
            </span>
            <Progress
              color='yellow'
              progress={33}
              size='sm'
              className='w-[120px] '
            />
            <p className='text-[12px]'>14563</p>
          </div>
          <div className='flex items-center gap-2 mb-1'>
            <span className='flex items-center text-[13px] gap-1'>
              2 <HiStar color='#D5D5DA' size={14} />
            </span>
            <Progress
              color='purple'
              progress={15}
              size='sm'
              className='w-[120px] '
            />
            <p className='text-[12px]'>9864</p>
          </div>
          <div className='flex items-center gap-2 mb-1'>
            <span className='flex items-center text-[13px] gap-1'>
              1 <HiStar color='#D5D5DA' size={14} />
            </span>
            <Progress
              color='red'
              progress={9}
              size='sm'
              className='w-[120px] '
            />
            <p className='text-[12px]'>4532</p>
          </div>
        </div>
        {/* Progress Bar */}
      </div>

      <div className='flex gap-2 items-center mt-8'>
        <span className='text-[15px] uppercase font-semibold'>
          What Customers Said
        </span>
        <span>
          <Stars />
        </span>
      </div>

      <div>
        <span className='text-[13px] text-gray-600 font-normal'>Fit</span>
        <div className='flex gap-4 items-center mt-[-10px]'>
          <Progress
            color='purple'
            progress={67}
            size='sm'
            className='w-[140px] '
          />
          <span className='text-[13px] font-semibold'>Just Right (67%)</span>
        </div>
      </div>
      <div className='mt-[-20px] mb-4'>
        <span className='text-[13px] text-gray-600 font-normal'>Length</span>
        <div className='flex gap-4 items-center mt-[-10px]'>
          <Progress
            color='purple'
            progress={76}
            size='sm'
            className='w-[140px] '
          />
          <span className='text-[13px] font-semibold'>Good Fitting (76%)</span>
        </div>
      </div>
      <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
      {/* Rating */}

      {/* Customer Photos */}
      <div className='flex gap-2 items-center mt-8'>
        <span className='text-[15px] font-semibold'>Customer Photos (491)</span>
      </div>

      <div className='flex gap-2 mt-4'>
        {reviews.map((review, idx) => {
          return (
            <div className='relative' key={idx}>
              <Image
                width={75}
                height={75}
                src={review.images[0]}
                alt=''
                className={`w-[75px] h-[75px] object-cover cursor-pointer ${
                  idx === reviews.length - 1 && 'relative brightness-50'
                }`}
              />

              {idx === reviews.length - 1 && (
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15px] text-gray-50 font-semibold'>
                  +488
                </p>
              )}
            </div>
          );
        })}
      </div>
      {/* Customer Photos */}

      {/* Customer Reviews */}
      <div className='flex gap-2 items-center mt-8'>
        <span className='text-[15px] font-semibold'>
          Customer Reviews (3806)
        </span>
      </div>

      <div className='flex gap-4 flex-col'>
        {reviews.map((review, idx) => {
          return (
            <div key={idx}>
              <div>
                <div className='flex gap-2'>
                  <div className='w-[30px] h-[15px] justify-center mt-1 text-[10px] flex items-center gap-1 bg-green-600 text-gray-50'>
                    5 <HiStar size={12} color='white' />
                  </div>
                  <p className='text-[15px] w-[95%]'>{review.review}</p>
                </div>
                <div className='flex ml-[7%] mt-4 gap-2'>
                  {review.images.map((image, idx) => {
                    return (
                      <div key={idx}>
                        <Image
                          width={75}
                          height={75}
                          src={image}
                          alt=''
                          className={`w-[75px] h-[75px] object-cover cursor-pointer`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className='ml-[6%] mt-2 flex gap-3 items-center'>
                <p className='text-[14px] text-gray-500'>{review.name}</p>
                <span className='h-[14px] w-[1px] bg-gray-500'></span>
                <p className='text-[14px] text-gray-500'>{review.date}</p>
              </div>

              <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665] mt-4' />
            </div>
          );
        })}
      </div>

      <div className='flex gap-2 items-center mt-2'>
        <span className='text-[14px] text-[#ff3f6c] font-semibold'>
          View All 3806 Reviews
        </span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <p className='text-[14px]'>
          Product Code: <span className='font-semibold'>2275365</span>
        </p>
        <p className='text-[14px]'>
          Seller: &nbsp;
          <span className='text-[14px] text-[#ff3f6c] font-semibold'>
            Truenet Commerce
          </span>
        </p>
        <p className='text-[13px] font-semibold'>View Supplier Information</p>
      </div>
      {/* Customer Reviews */}
    </div>
  );
};

export default ProductReviews;
