/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";
import WorldCard, { AvatarCard } from "@/components/WorldCard";

const World = () => (
  <section className='paddings relative z-10'>
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='world'
    >
      <div className='gradient-02 z-0' />
      <div className='gradient-06 z-0' />
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover ' />
        <AvatarCard textStyles='people-01' imgUrl='/people-01.png' />
        <AvatarCard textStyles='people-02' imgUrl='/people-02.png' />
        <AvatarCard textStyles='people-03' imgUrl='/people-03.png' />
        <WorldCard
          imgUrl='/place2.png'
          textStyles='people-04'
          title='Hawkins Lab'
        />
        <WorldCard
          imgUrl='/place1.png'
          textStyles='people-05'
          title='The Upside Down'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
