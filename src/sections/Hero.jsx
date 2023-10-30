"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-5 -mt-3"
        >
          <Image
            src="/cover.png"
            alt="cover"
            width={1920}
            height={1080}
            priority={true}
            className="w-full sm:h-[450px] h-[300px] object-cover rounded-tl-[140px] z-10 -mt-3 "
          />

          <motion.div
            variants={textVariant(1.3)}
            className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px]  z-10"
          >
            <Image
              src="/stamp2.png"
              alt="stamp"
              width={130}
              height={155}
              className="sm:w-[130px] w-[100px] sm:h-[155px] h-[100px] object-contain "
            />
            <a
              href="#explore"
              className="sm:w-[130px] w-[100px] sm:h-[155px] h-[100px] absolute z-20"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
