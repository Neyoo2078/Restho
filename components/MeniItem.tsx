import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const MenuItem = ({ items }: { items: { image: string; title: string } }) => {
  const [hoverState, sethoverState] = useState(false);
  return (
    <div className="lg:w-[415px] lg:h-[497px] w-full h-[497px] border-[1px] rounded-[10px]">
      <div
        onMouseEnter={() => {
          sethoverState(true);
        }}
        onMouseLeave={() => {
          sethoverState(false);
        }}
        className="w:w-[415px] w-full h-[321px] relative rounded-[10px]"
      >
        <AnimatePresence>
          {hoverState && (
            <motion.div
              initial={{ x: -415 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4, type: 'linear' }}
              exit={{ x: 415 }}
              className="absolute inset-0 bg-[hsla(0,0%,100%,.2)]"
            />
          )}
        </AnimatePresence>
        <div className="w-[93px] text-[22px]  font-Jost  flex items-center justify-center bg-white h-[38px] absolute top-[10px] -right-[3px] rounded-tl-[20px] rounded-bl-[20px]">
          Launch
        </div>
        <div className="w-[113px] text-[22px] text-[#bf9444] font-Jost border-[1px] flex items-center justify-center bg-white h-[35px] absolute left-[130px] lg:left-[160px] -bottom-[10px] rounded-[20px]">
          $40
        </div>
        <Image
          className="rounded-tr-[10px] rounded-tl-[10px]"
          src={items.image}
          alt="photo"
          width={415}
          height={321}
        />
      </div>
      <div className="w-[70%] h-[176px] flex gap-2 flex-col py-5 m-auto text-center">
        <h1 className="text-[30px] font-Cormorant">{items.title}</h1>
        <p className="font-Jost text-[18px] leading-[24px]">
          It is a long established fact that a reader will be distracted.
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
