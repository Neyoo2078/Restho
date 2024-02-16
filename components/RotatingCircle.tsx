import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RotatingCircle = ({ items }: { items: string }) => {
  return (
    <motion.div className="rotating-div absolute -left-[30px] w-[370px] z-50 overflow-visible -top-[20px] h-[370px]  rounded-full  ">
      <Image width={370} height={370} src={items} alt="photo" />
    </motion.div>
  );
};

export default RotatingCircle;
