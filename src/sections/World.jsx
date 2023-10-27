"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full "
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-contain"
          />

          <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="absolute top-[10%] left-[8%]   md:top-[15%]  md:left-[9%]   lg:top-[18%] lg:left-[12%]  w-[60px] h-[60px] p-[6px] rounded-full bg-[#5D6680] shadow-[#f29db0] shadow-grande"
          >
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="absolute top-[35%] right-[45%]   md:top-[40%] md:right-[48%]   lg:top-[45%] lg:right-[50%]  w-[60px] h-[60px] p-[6px] rounded-full bg-[#5D6680]  shadow-[#adb6d7] shadow-grande"
          >
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="absolute bottom-[10%] right-[10%] md:bottom-[15%]  md:right-[9%]  w-[60px] h-[60px] p-[6px] rounded-full bg-[#5D6680] shadow-[#f6623e] shadow-grande"
          >
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
