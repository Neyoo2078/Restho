'use client';
import React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import HeroText from './HeroText';
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
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { heroImages } from '@/utils/data';

const HeroSwiper = () => {
  const swiperRef: any = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(0);

  console.log({ currentSlide });

  const updateIndex = useCallback(
    () => setCurrentSlide(swiperRef.current.swiper.realIndex),
    []
  );

  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);

  return (
    <div className="w-full relative flex items-center overflow-hidden lg:gap-3 px-[20px] justify-between h-[600px] lg:h-[700px] lg:p-[20px] text-white">
      <div className="hidden flex-col gap-5 lg:flex ">
        <div className={`bullet ${currentSlide === 0 && 'active'} `} />
        <div className={`bullet ${currentSlide === 1 && 'active'} `} />
        <div className={`bullet ${currentSlide === 2 && 'active'} `} />
      </div>
      {currentSlide === 0 && <HeroText />}
      {currentSlide === 1 && <HeroText />}
      {currentSlide === 2 && <HeroText />}
      <div className="absolute w-[198px] h-[292px] top-[150px] z-0  left-[0px]">
        <Image
          src="/slider-paginatin-bg.svg"
          alt="circle"
          width="198"
          height="292"
        />
      </div>
      <motion.div
        className="absolute top-[50px] right-[130px]"
        animate={{
          y: [0, 20, 40, 60, 40, 20, 0],
          x: [0, 4, 2, 4, 0, 0],
        }}
        transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
      >
        <Image src="/banner-circle.svg" alt="circle" width="65" height="65" />
      </motion.div>
      <motion.div
        className="absolute top-[60px] right-[700px]"
        animate={{
          y: [0, 10, 20, 40, 20, 10, 0],
          x: [0, 2, 4, 3, 1, 0],
        }}
        transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
      >
        <Image
          src="/banner-rect-shape.svg"
          alt="circle"
          width="80"
          height="80"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[130px] left-[500px]"
        animate={{
          y: [0, 10, 20, 40, 20, 10, 0],
          x: [0, 2, 4, 3, 1, 0],
        }}
        transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
      >
        <Image
          src="/banner-rect-shape.svg"
          alt="circle"
          width="80"
          height="80"
        />
      </motion.div>
      <div className="w-[50%] h-full lg:block hidden ">
        <Swiper
          initialSlide={clickedIndex}
          ref={swiperRef}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          slidesPerView={1}
          autoHeight={true}
          slidesPerGroup={1}
          spaceBetween={500}
          slidesOffsetAfter={0}
          grabCursor={true}
          speed={1500}
          freeMode={true}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          direction="vertical"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          {heroImages.map((items, i) => (
            <SwiperSlide key={i}>
              <div className=" text-white flex lg:mt-[70px]  overflow-visible    w-full h-full">
                <div className=" relative -mt-[50px] w-[612px] z-30 h-full">
                  <div className=" absolute left-[200px]  z-40 -top-[30px]">
                    <Image
                      src={items.image1}
                      alt="photo"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className=" absolute -right-[90px]  top-[105px] z-40 ">
                    <Image
                      src={items.image2}
                      alt="photo"
                      width={329}
                      height={300}
                    />
                  </div>
                  <div className=" absolute left-[2px] top-[110px] z-40">
                    <Image
                      src={items.image3}
                      alt="photo"
                      width={329}
                      height={300}
                    />
                  </div>
                  <div className=" absolute -bottom-[12px] right-[59px] z-40">
                    <Image
                      src={items.image4}
                      alt="photo"
                      width={396}
                      height={396}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSwiper;
