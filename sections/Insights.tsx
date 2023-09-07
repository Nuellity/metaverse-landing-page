/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { InsightCard, TitleText, TypingText } from "@/components";
import { insights } from "../constants";

const Insights = () => (
  <section className='paddings relative z-10'>
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='world'
    >
      <TypingText title='| Insight' textStyles='text-center' />
      <TitleText
        title={<>Insights about metaverse</>}
        textStyles='text-center'
      />
      <div className='insight-wrapper'>
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
