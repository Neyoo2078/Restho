import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroText = () => {
  return (
    <motion.div className="lg:w-[55%] w-full h-[396px]  p-5 flex items-center justify-start gap-7 ">
      <div className="flex flex-col gap-10 lg:gap-5  justify-center items-center lg:items-start lg:justify-start">
        <motion.div className="z-30 flex justify-center">
          <div className="flex  gap-2 items-center ">
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />
            <h1 className="text-[18px] font-Jost font-[300]">
              Welcome to restho
            </h1>
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: [0, -9, 1],
            y: 0,
          }} // Adding yoyo effect for vibration
          transition={{
            duration: 4,
            type: 'spring',
            mass: 0.5,
            yoyo: Infinity,
          }}
          className="z-30"
        >
          {' '}
          <h1 className="lg:text-[60px] text-[35px] text-center lg:text-start font-Cormorant ">
            Find Your Best Healthy & Tasteful Food
          </h1>
        </motion.div>
        <motion.div className="font-Jost lg:text-[18px] text-center lg:text-start  text-[14px] font-[200] lg:font-[300]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </motion.div>
        <div className="rounded-[50px] w-[198px] flex justify-center border-[1px] items-center bg-[#bf9444] h-[49px]  overflow-hidden  border-[#bf9444]">
          <button className="bbutton">Discover More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroText;
