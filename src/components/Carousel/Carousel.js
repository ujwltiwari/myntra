import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://assets.myntassets.com/assets/images/retaillabs/2021/12/3/cba3ef6b-0d92-4e1b-8788-15a435f34d351638535513180-EORS-WhatsApp-Share-480x640-.jpg'
            width={300}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
