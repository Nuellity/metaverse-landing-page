/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => (
  <section className='y-paddings p-left'>
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='head-wrap'
    >
      <div className='hero-gradient z-0' />
      <div className='head'>
        <motion.h1 variants={textVariant(1.1)} className='hero-heading'>
          Metaverse
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justify-center items-center'
        >
          <h1 className='hero-heading'>Ma</h1>
          <div className='hero-d-text' />
          <h1 className='hero-heading'>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='hero-img-wrap'
      >
        <div className='hero-img-cover' />
        <img src='/cover.png' alt='cover' className='hero-img' />
        <a href='#explore'>
          <div className='hero-stamp-cover'>
            <img alt='stamp' src='/stamp.png' className='hero-stamp' />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
