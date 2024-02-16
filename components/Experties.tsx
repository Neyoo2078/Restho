'use client';
import React from 'react';
import Image from 'next/image';
import { ChefList } from '@/utils/data';
import Chefs from './Chefs';

const Experties = () => {
  return (
    <div className="w-full overflow-hidden bg-white pt-[30px]">
      <div className="w-[90%] m-auto flex py-[30px] flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2 items-center">
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />{' '}
            <h1>Experties</h1>
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />
          </div>
          <h1 className="font-Cormorant text-[30px] text-center lg:text-start lg:text-[60px]">
            Restho's Best Chefs
          </h1>
        </div>
        <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-2">
          {ChefList.map((items, i) => (
            <Chefs key={i} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experties;
