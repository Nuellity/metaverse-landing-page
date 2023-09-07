/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className='paddings py-8 relative'
    >
      <div className='footer-gradient' />
    </motion.footer>
  );
};

export default Footer;
