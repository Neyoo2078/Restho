import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Chefs = ({ items }: any) => {
  const [hoverState, sethoverState] = useState(false);
  return (
    <div className="lg:w-[415px] w-full h-[497px] border-[1px]   rounded-[10px]">
      <motion.div className="lg:w-[415px] w-full h-[321px] relative overflow-hidden rounded-[10px]">
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          className="rounded-tr-[10px] rounded-tl-[10px]"
          src={items.image}
          alt="photo"
        />
      </motion.div>
      <div className="lg:w-[70%] w-full h-[176px] flex gap-2 items-center flex-col py-5 m-auto text-center">
        <h1 className="text-[30px] font-Cormorant">{items.title}</h1>
        <p className="font-Jost text-[18px] leading-[24px]">Head Of Chef</p>
        <div className="flex gap-3 items-center text-black">
          <BiLogoFacebook className="w-20px h-[20px] text-[#5e5e5e] hover:text-[#bf9444]" />
          <div className="flex gap-3 items-center text-[#5e5e5e] hover:text-[#bf9444]">
            <div className="w-[5px] h-[5px] rounded-full bg-[rgba(191,148,68,.3)]" />
            <FaInstagram className="w-20px h-[20px] " />
          </div>
          <div className="flex gap-3 items-center text-[#5e5e5e] hover:text-[#bf9444]">
            <div className="w-[5px] h-[5px] rounded-full bg-[rgba(191,148,68,.3)]" />
            <FaLinkedinIn className="w-20px h-[20px] " />
          </div>
          <div className="flex gap-3 items-center cursor-pointer text-[#5e5e5e] hover:text-[#bf9444]">
            <div className="w-[5px] h-[5px] rounded-full  hover:bg-[#bf9444] bg-[rgba(191,148,68,.3)]" />
            <FaTwitter className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
