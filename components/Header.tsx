'use client';
import React from 'react';
import Image from 'next/image';
import { NavLinks } from '@/utils/data';
import CustomMenu from './CustomMenu';

const Header = () => {
  return (
    <div className="w-full flex flex-col overflow-visible mb-[20px] items-center">
      <div className="w-[90%] text-white m-auto  flex justify-between  p-[20px]">
        <p>Opening Hour:9.00am to 10:00pm</p>
        <div className="lg:flex hidden justify-between items-center w-[35%]">
          <p className="text-[15px] font-Jost">info@example.com</p>
          <p className="text-[15px] font-Jost">
            Road101, BlockB, West London City
          </p>
        </div>
      </div>
      <div className="w-[90%] hidden lg:flex overflow-visible   items-center justify-between bg-[#fff] px-[30px] h-[87px] rounded-[48px]">
        <Image src="/header2-logo.svg" alt="logo" width={181} height={41} />
        <div className=" flex gap-5 lg:gap-1  h-[40px]  overflow-visible ">
          {NavLinks.map((items: any, i: number) => (
            <CustomMenu items={items} key={i} />
          ))}
        </div>
        <div className="rounded-[50px] w-[198px] flex justify-center items-center bg-[#bf9444] h-[49px]  overflow-hidden  border-[#bf9444]">
          <button className="bbutton">Find Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
