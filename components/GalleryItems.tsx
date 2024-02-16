import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const GalleryItems = ({ items }: any) => {
  const [hoverState, sethoverState] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        sethoverState(true);
      }}
      onMouseLeave={() => {
        sethoverState(false);
      }}
      className="w-[329px] h-[300px] relative"
    >
      <AnimatePresence>
        {hoverState && (
          <motion.div
            initial={{ scaleX: 0, x: 0 }}
            animate={{ scaleX: 1, x: 0 }}
            transition={{ duration: 0.2, type: 'linear' }}
            exit={{ scaleX: 0, x: 329 }}
            className="absolute inset-0 bg-my-bg origin-left"
          >
            <Image src="/Zoom.svg" alt="photo" width={329} height={300} />
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={items.image}
        alt="photo"
        width={329}
        height={300}
        className="w-full h-full"
      />
    </div>
  );
};

export default GalleryItems;
