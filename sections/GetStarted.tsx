/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";

const GetStarted = () => (
  <section className='paddings relative z-10'>
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='get-started'
    >
      <motion.div
        variants={planetVariants("left")}
        initial='hidden'
        whileInView='show'
        className='flex-center flex-1'
      >
        <img
          alt='get-started'
          src='/get-started.png'
          className='w-[60%] h-[60%] object-contain'
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial='hidden'
        whileInView='show'
        className='flex-1 flex justify-center flex-col'
      >
        <TypingText title='| How Metaworld Works' />
        <TitleText title={<>Get Started with just a few clicks</>} />
        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {startingFeatures.map((feature, index) => (
            <StartSteps key={index} text={feature} number={index + 1} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
