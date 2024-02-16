import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

interface props {
  items: any;
}
const CustomMenu = ({ items }: props) => {
  const [Menuitems, setMenuitems] = useState(false);
  const [Height, setHeight] = useState(0);
  const [defaultHeight, setdefaultHeight] = useState(20);
  const box: React.RefObject<HTMLDivElement> | null = useRef(null);
  const outsideBox: React.RefObject<HTMLDivElement> | null = useRef(null);

  useEffect(() => {
    if (box?.current) {
      setHeight(box?.current?.clientHeight + defaultHeight);
    }
  }, [Menuitems]);
  console.log({ Height });
  console.log(Menuitems);
  console.log(items.subLInks);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.id !== `${items.name}`) {
        if (outsideBox.current && !outsideBox.current?.contains(e.target)) {
          setMenuitems(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      ref={outsideBox}
      id={`${items.name}`}
      className="text-black relative flex-col h-6 overflow-visible  flex gap-3 w-[100px]"
      onMouseEnter={() => {
        setMenuitems(true);
      }}
      onMouseLeave={() => {
        setMenuitems(false);
      }}
    >
      <div className="flex  items-center w-full z-10">
        <button className="w-full"> {items.name}</button>
        {items.subLInks.length > 0 && (
          <div>
            <IoIosArrowDown />
          </div>
        )}
      </div>
      <AnimatePresence>
        {Menuitems && items.subLInks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 17 }}
            animate={{ opacity: [0, 0.5, 1], y: [17, 10, 7] }}
            transition={{ type: 'linear', duration: 0.7 }}
            exit={{
              opacity: [1, 0.5, 0],
              y: [0, 10, 17],
              transition: { type: 'linear', duration: 0.7 },
            }}
            ref={box}
            style={{ position: 'absolute', bottom: -Height }}
            onMouseEnter={() => {
              setMenuitems(true);
            }}
            onMouseLeave={() => {
              setMenuitems(false);
            }}
            className={`bg-[#fff] w-[150px] absolute cursor-pointer p-3 flex flex-col gap-2  z-50 `}
          >
            {items.subLInks.map((items: any, i: number) => (
              <div
                key={i}
                className="text-black cursor-pointer"
                onClick={() => {
                  setMenuitems(false);
                }}
              >
                {items.name}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomMenu;
