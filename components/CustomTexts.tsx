"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

export const TypingText = (props: { title: string; textStyles?: string }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px]  text-secondary-white ${props.textStyles} `}
    >
      {Array.from(props.title).map((title, index) => (
        <motion.span variants={textVariant2} key={index}>
          {title === " " ? "\u00A0" : title}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = (props: { title: any; textStyles?: string }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial='hidden'
      whileInView='show'
      className={`${props.textStyles}  mt-[8px] font-bold md:text-[64px] text-[40px]  text-white `}
    >
      {props.title}
    </motion.h2>
  );
};
