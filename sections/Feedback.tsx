/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Feedback = () => {
  return (
    <section className='paddings relative z-10'>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='feedback'
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='feedback-wrap'
        >
          <div className='feedback-gradient' />
          <div>
            <h4 className='feedback-head'>Samantha</h4>
            <p className='feedback-title'>Founder | MetaWorld</p>
          </div>
          <p className='feedback-content'>
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='relative flex-1 flex justify-center items-center'
        >
          <img
            src='/planet-09.png'
            alt='planet-09'
            className='feedback-image'
          />
          <motion.div className='feedback-stamp' variants={zoomIn(0.4, 1)}>
            <img src='/stamp.png' alt='stamp' className='stamp-image' />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
