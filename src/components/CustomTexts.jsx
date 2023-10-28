"use client";
import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      animate="show"
      className={`font-normal text-sm text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const TitleText = ({ title, textStyles }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      animate="show"
      className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};
