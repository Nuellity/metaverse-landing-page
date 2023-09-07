/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "@/components";

const About = () => (
  <motion.div className='paddings z-10 relative'>
    <div className='gradient-02 z-0' />
    <motion.div
      className='about'
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title='| About Metaworld' textStyles='text-center' />
      <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className='about-text'>
        <span className='font-extrabold text-white'>Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className='font-extrabold text-white'>
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className='font-extrabold text-white'>VR </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's
        <span className='font-extrabold text-white'> explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        alt='arrow down'
        src='/arrow-down.svg'
        className='about-img'
      />
    </motion.div>
  </motion.div>
);

export default About;
