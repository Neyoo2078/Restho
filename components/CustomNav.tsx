'use client';
import React, { useRef } from 'react';
import { useCallback } from 'react';
import Image from 'next/image';
import { RegularGallery } from '@/utils/data';
import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';
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

const CustomNav = () => {
  const sliderRef: any = useRef();
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full h-[863px] bg-regular-bg pt-[60px] text-black  lg:p-0">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex gap-2 items-center justify-center">
          <Image src="/sub-title-vec.svg" alt="photo" width={25} height={25} />
          <h1 className="text-[#bf9444]">Our New Item</h1>
          <Image src="/sub-title-vec.svg" alt="photo" width={25} height={25} />
        </div>
        <h1 className="font-Cormorant text-center lg:text-start text-[35px] lg:text-[60px] text-white">
          Restho New Item List
        </h1>

        <p className="text-[18px] font-Jost text-center lg:text-start text-[#ffffffcc] text-white">
          Various version has eveolved over the years , sometimes on purpose.
        </p>
        <div className="w-[92%] h-[400px] m-auto relative">
          <div
            onClick={handleNext}
            className="w-[30px] h-[30px] hidden lg:flex text-white rounded-full  justify-center items-center bg-[#bf9444] absolute -left-[50px] top-[200px]"
          >
            <IoArrowBackOutline />
          </div>
          <div
            onClick={handlePrev}
            className="w-[30px] h-[30px] hidden lg:flex text-white rounded-full bg-[#bf9444] items-center justify-center absolute -right-[30px] top-[200px]"
          >
            <IoArrowForward />
          </div>
          <Swiper
            // install Swiper modules
            ref={sliderRef}
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            freeMode={true}
            centeredSlides={true}
            loop
            autoplay
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {RegularGallery.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-[375px] h-[375px] lg:w-[430px]  lg:h-[417px] flex flex-col items-end justify-center ">
                    <div className="absolute w-14 h-14 bg-white flex font-[600] justify-center items-center rounded-md bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-40 transition duration-350">
                      <h1 className=" transform  rotate-[315deg]">$32</h1>
                    </div>
                    <Image
                      src={items.image}
                      alt="photo"
                      width={430}
                      height={417}
                    />
                  </div>
                  <div className="w-[70%] m-auto flex flex-col items-center gap-2">
                    <h1 className="text-white font-Cormorant text-[32px]">
                      {items.title}
                    </h1>
                    <p className="text-white  text-center font-Jost text-[18px]">
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomNav;
