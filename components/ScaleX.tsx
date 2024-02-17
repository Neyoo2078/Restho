'use client';
import React from 'react';
import { GalleryList } from '@/utils/data';
import GalleryItems from './GalleryItems';
import Image from 'next/image';

const ScaleX = () => {
  return (
    <div className="w-full text-black  bg-white pt-[30px]">
      <div className="w-[90%] m-auto flex flex-col  items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2 items-center">
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />{' '}
            <h1>Gallery Store</h1>
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />
          </div>
          <h1 className="font-Cormorant text-center lg:text-start text-[30px] lg:text-[60px]">
            Our Special Gallery
          </h1>
        </div>

        <div className="w-full flex lg:flex-row flex-col gap-2">
          {GalleryList.map((items, i) => (
            <GalleryItems key={i} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScaleX;
