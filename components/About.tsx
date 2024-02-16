import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-white  flex   lg:min-h-[400px] items-start lg:p-[60px] w-full  ">
      <div className="flex lg:flex-row w-full h-full   p-[10px] lg:p-0 flex-col gap-11 justify-between items-start">
        <div className="w-[328px] h-[245px]  block lg:hidden lg:mb-0 mb-[50px]">
          <Image
            src="/about-img-full.png"
            alt="photo"
            width={398}
            height={295}
          />
        </div>
        <div className="lg:w-[620px] w-[318px] m-auto lg:m-0 h-[215px]   lg:h-[365px] hidden lg:flex items-center relative">
          <div className="w-[365px] h-[365px] absolute">
            <Image src="/about-img1.png" alt="photo" width={365} height={365} />
          </div>
          <div className="w-[240px] h-[240px]  absolute left-[255px] -top-[80px]  ">
            <Image src="/about-img2.png" alt="photo" width={240} height={240} />
          </div>
          <div className="w-[240px] h-[240px] absolute top-[60px] right-0">
            <Image src="/about-img3.png" alt="photo" width={240} height={240} />
          </div>
          <div className="w-[286px] h-[286px] absolute left-[230px] -bottom-[120px]">
            <Image src="/about-img4.png" alt="photo" width={286} height={286} />
          </div>
        </div>
        <div className="lg:w-[700px] w-full flex  items-center lg:items:start flex-col py-5 gap-5 lg:gap-2">
          <div className="flex items-center m-auto gap-2">
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />
            <h1>About Restho</h1>
            <Image
              src="/sub-title-vec.svg"
              alt="photo"
              width={25}
              height={25}
            />
          </div>
          <h1 className="lg:text-[56px] text-[35.2px] font-Cormorant">
            Come to Our Restaurant, Ready Your Food.
          </h1>
          <p className="lg:text-[1.125rem] text-[15px] text-[#5e5e5e] font-[400] pt-[10px] leading-[30px]">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="flex justify-center p-4 ">
            <div className="w-full h-[100px] flex lg:flex-row flex-col gap-4 items-start ">
              <div className="w-[300px] flex gap-4 items-start ">
                <div className="w-[60px] h-[60px]  border-[#bf9444] flex justify-center items-center border-[1px] rounded-[10px]">
                  <Image
                    src="/h2-about1.svg"
                    alt="photo"
                    width={40}
                    height={40}
                    className="m-auto"
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-Cormorant">
                    Pure Fresh Food.
                  </h1>
                  <h1 className="text-[18px] font-Jost">
                    We are serve different type of fresh food.
                  </h1>
                </div>
              </div>
              <div className="w-[300px] flex gap-4 items-start ">
                <div className="w-[60px] h-[60px] border-[1px] border-[#bf9444] flex items-center justify-center rounded-[10px]">
                  <Image
                    src="/h2-about2.svg"
                    alt="photo"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-Cormorant">
                    Pure Fresh Food.
                  </h1>
                  <h1 className="text-[18px] font-Jost">
                    We are serve different type of fresh food.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[50px] mt-[40px] w-[198px] border-[1px]  bg-[#bf9444] h-[49px]  overflow-hidden  border-[#bf9444]">
            <button className="bbbutton"> Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
