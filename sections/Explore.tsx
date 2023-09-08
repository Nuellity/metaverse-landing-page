"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/components";
import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState(2);
  return (
    <div className='paddings' id='explore'>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='explore-wrap'
      >
        <div className='gradient-06 z-0' />
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className='md:block hidden' /> to explore
            </>
          }
          textStyles='text-center'
        />
        <div className='explore-list'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;
