'use client';
import React from 'react';
import RotatingCircle from './RotatingCircle';
import { SliderGallery } from '@/utils/data';
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const FreeSlider = () => {
  return (
    <div className="bg-white  flex min-h-[400px] items-center py-[60px] w-full lg:p-[20px] ">
      <div className="w-[95%]  m-auto flex justify-center items-center ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          freeMode={true}
          centeredSlides={true}
          autoplay
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          style={{ width: '100%', height: '200px' }}
        >
          {SliderGallery.map((items, i) => (
            <SwiperSlide key={i}>
              <div className="w-[320px] relative h-[120px]  pr-[5px]  flex flex-col items-end justify-center mt-8 z-40 overflow-visible border-[1px]">
                <RotatingCircle items={items.image} />
                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-Cormorant text-[26px]">{items.title}</h1>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet consectet.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FreeSlider;
