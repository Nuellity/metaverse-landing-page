/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { NewFeatures, StartSteps, TitleText, TypingText } from "@/components";
import { newFeatures, startingFeatures } from "@/constants";

const WhatsNew = () => (
  <section className='paddings relative z-10'>
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='get-started'
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial='hidden'
        whileInView='show'
        className='flex-1 flex justify-center flex-col'
      >
        <TypingText title="| What's New ?" />
        <TitleText title={<>What's new about Metaworld?</>} />
        <div className='mt-[31px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature, index) => (
            <NewFeatures key={index} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        initial='hidden'
        whileInView='show'
        className='flex-center flex-1'
      >
        <img
          alt='whats-new'
          src='/whats-new.png'
          className='w-[60%] h-[60%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
