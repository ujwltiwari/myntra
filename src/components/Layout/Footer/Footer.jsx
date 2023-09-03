import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const menu = [
    {
      menu: 'Online Shopping',
      subMenu: [
        {
          name: 'Men',
          link: '/men',
        },
        {
          name: 'Women',
          link: '/women',
        },
        {
          name: 'Kids',
          link: '/kids',
        },
        {
          name: 'Home & Living',
          link: '/home',
        },
        {
          name: 'Beauty',
          link: '/beauty',
        },
        {
          name: 'Gift Cards',
          link: '/gift-cards',
        },
        {
          name: 'Myntra Insider',
          link: '/insider',
        },
      ],
    },
    {
      menu: 'Customer Policies',
      subMenu: [
        {
          name: 'Contact Us',
          link: '#',
        },
        {
          name: 'FAQ',
          link: '/faq',
        },
        {
          name: 'T&C',
          link: '/tc',
        },
        {
          name: 'Terms of Use',
          link: '/terms',
        },
        {
          name: 'Track Orders',
          link: '/track',
        },
        {
          name: 'Shipping',
          link: '/shipping',
        },
        {
          name: 'Cancellation',
          link: '/cancellation',
        },
        {
          name: 'Returns',
          link: '/returns',
        },
        {
          name: 'Privacy Policy',
          link: '/privacy-policy',
        },
        {
          name: 'Grievance Officer',
          link: '#',
        },
      ],
    },
    {
      menu: 'Experience Myntra App On Mobile',
      subMenu: [
        {
          link: 'https://play.google.com/store/apps/details?id=com.myntra.android',
          image:
            'https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png',
        },
        {
          link: 'https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059',
          image:
            'https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png',
        },
      ],
    },
    {
      menu: 'Keep in Touch',
      subMenu: [
        {
          link: 'https://www.facebook.com/myntra',
          image:
            'https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png',
        },
        {
          link: 'https://twitter.com/myntra',
          image:
            'https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png',
        },
        {
          link: 'https://www.youtube.com/user/myntradotcom',
          image:
            'https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png',
        },
        {
          link: 'https://www.instagram.com/myntra',
          image:
            'https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png',
        },
      ],
    },
    {
      menu: 'Useful Links',
      subMenu: [
        {
          name: 'Blog',
          link: '#',
        },
        {
          name: 'Careers',
          link: '#',
        },
        {
          name: 'Site Map',
          link: '#',
        },
        {
          name: 'Corporate Information',
          link: '#',
        },
        {
          name: 'Whitehat',
          link: '#',
        },
      ],
    },
  ];

  const searches = [
    'Makeup',
    'Dresses For Girls',
    'T-Shirts',
    'Sandals',
    'Headphones',
    'Babydolls',
    'Blazers For Men',
    'Handbags',
    'Ladies Watches',
    'Bags',
    'Sport Shoes',
    'Reebok Shoes',
    'Puma Shoes',
    'Boxers',
    'Wallets',
    'Tops',
    'Earrings',
    'Fastrack Watches',
    'Kurtis',
    'Nike',
    'Smart Watches',
    'Titan Watches',
    'Designer Blouse',
    'Gowns',
    'Rings',
    'Cricket Shoes',
    'Forever 21',
    'Eye Makeup',
    'Photo Frames',
    'Punjabi Suits',
    'Bikini',
    'Myntra Fashion Show',
    'Lipstick',
    'Saree',
    'Watches',
    'Dresses',
    'Lehenga',
    'Nike Shoes',
    'Goggles',
    'Bras',
    'Suit',
    'Chinos',
    'Shoes',
    'Adidas Shoes',
    'Woodland Shoes',
    'Jewellery',
    'Designers Sarees',
  ];

  return (
    <div className='bg-gray-100 p-12 flex items-center flex-col mt-12'>
      <div className='flex gap-12 w-[70%] flex-wrap'>
        {menu.map((x, idx) => {
          return (
            <ul key={idx}>
              <li
                key={idx}
                className='text-[13px] font-semibold uppercase mb-4'
              >
                {x.menu}
              </li>

              {x.subMenu.map((y, idx) => {
                return (
                  <Link href={y.link} key={idx}>
                    <li className='text-[14px] font-normal text-gray-600 capitalize leading-6'>
                      {y.name}
                    </li>
                  </Link>
                );
              })}

              <ul className='flex gap-2'>
                {x.subMenu[0].image &&
                  x.subMenu.map((y, idx) => {
                    return (
                      <Link key={idx} href={y.link} target='_blank'>
                        <li>
                          {y.image && (
                            <Image
                              src={y.image}
                              width={
                                y.link.includes('play') ||
                                y.link.includes('itunes')
                                  ? 140
                                  : 20
                              }
                              height={
                                y.link.includes('play') ||
                                y.link.includes('itunes')
                                  ? 50
                                  : 20
                              }
                              alt='image'
                              style={{
                                height:
                                  y.link.includes('play') ||
                                  y.link.includes('itunes')
                                    ? 50
                                    : 20,
                              }}
                            />
                          )}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </ul>
          );
        })}
      </div>

      <div className=' w-[70%]'>
        <p className='text-[13px] font-semibold uppercase mb-4 mt-4'>
          Popular Searches
        </p>

        {searches.map((search, idx) => (
          <div className='inline-flex items-center leading-7' key={idx}>
            <span className='text-[14px] text-gray-500'>{search}</span>
            &nbsp;
            <span className='inline-block h-[14px] w-[1px] bg-gray-500'></span>
            &nbsp;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
