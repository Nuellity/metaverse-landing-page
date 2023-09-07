/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ExploreCard = (props: {
  index: number;
  active: number;
  handleClick: any;
  id: number;
  imgUrl: string;
  title: string;
}) => {
  const { index, active, handleClick, id, imgUrl, title } = props;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } explore-card`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className='absolute h-full w-full rounded-[24px] object-cover'
      />
      {active !== id ? (
        <h3 className='font-semibold sm:text-[20px] lg:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
          {title}
        </h3>
      ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
          <div className='flex-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'>
            <img
              alt='headset'
              src='/headset.svg'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
            Enter the Metaverse
          </p>
          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
