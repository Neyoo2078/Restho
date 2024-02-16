'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageInitialize = () => {
  const [Count, setCount] = useState<number>(0);
  const [OpenLayer, setOpenLayer] = useState(false);

  //   count from 1-100
  const initialCount = () => {
    let count = 0;
    const IntCount = setInterval(() => {
      if (count <= 99) {
        count += 1;
      } else {
        setOpenLayer(true);
      }

      setCount(count);
    }, 50);

    return () => clearInterval(IntCount);
  };

  useEffect(() => {
    initialCount();
  }, []);

  return (
    <AnimatePresence>
      {!OpenLayer && (
        <motion.div
          exit={{ y: '-100vh' }}
          transition={{
            ease: 'linear',

            y: { duration: 2 },
          }}
          className={`bg-black fixed inset-0 text-white z-40 flex items-center justify-center`}
        >
          <div>
            <h1 className="text-[60px] font-[500]">{Count}</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageInitialize;
