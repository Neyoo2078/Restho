'use client';
import React from 'react';
import Image from 'next/image';
import { FoodList } from '@/utils/data';

import MenuItem from './MeniItem';

const MenuList = () => {
  return (
    <div className="w-full text-black bg-white pt-[30px]  lg:p-[60px] ">
      <div className="lg:w-[90%] w-full m-auto">
        <div className="w-full flex lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col gap-3 items-center lg:items-start w-full">
            <div className="flex gap-2 items-center">
              <Image
                src="/sub-title-vec.svg"
                alt="photo"
                width={25}
                height={25}
              />{' '}
              <h1>Menu List</h1>
              <Image
                src="/sub-title-vec.svg"
                alt="photo"
                width={25}
                height={25}
              />
            </div>
            <h1 className="font-Cormorant text-center lg:text-start text-[40px] lg:text-[80px]">
              Find Your Food Items
            </h1>
          </div>
          <div className="rounded-[50px] w-[198px] hidden lg:flex justify-center border-[1px] items-center bg-[#bf9444] h-[49px]  overflow-hidden  border-[#bf9444]">
            <button className="bbbutton"> View More</button>
          </div>
        </div>
        <div className="w-full pt-[50px] grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-2">
          {FoodList.map((items, i) => (
            <MenuItem key={i} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
