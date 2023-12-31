"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";

import { newFeatures } from "../constants";
import Image from "next/image";

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.9] flex justify-center flex-col"
        >
          <TypingText title="| Whats New?" />
          <TitleText title={<>What&apos;s new about Metaversus?</>} />
          <div className="mt-[48px]  flex flex-wrap justify-between gap-6">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/whats-new.png"
            alt="whats-new"
            width={1280}
            height={700}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
