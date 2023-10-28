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
        viewport={{ once: true, amount: 0.25 }}
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
            className="absolute top-[10%] left-[8%]   md:top-[15%]  md:left-[9%]   lg:top-[18%] lg:left-[12%]  w-[60px] h-[60px] p-[6px] rounded-full bg-[#5D6680] shadow-[#f29db0] shadow-grande cursor-pointer"
          >
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={navVariants}
            className="absolute top-[35%] right-[45%]   md:top-[40%] md:right-[48%]   lg:top-[45%] lg:right-[50%]  w-[60px] h-[60px] p-[6px] rounded-full bg-[#5D6680]  shadow-[#adb6d7] shadow-grande cursor-pointer"
          >
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={navVariants}
            className="absolute bottom-[10%] right-[10%] md:bottom-[15%]  md:right-[9%]  w-[60px] h-[60px] p-[6px] rounded-full bg-[#5D6680] shadow-[#f6623e] shadow-grande cursor-pointer"
          >
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.2, 0.8)}
            className="absolute top-[10%] right-[22%] h-[150px] w-[220px] rounded-3xl p-1.5 bg-[#5D6680] shadow-[#4b85d6] shadow-grande hidden lg:block cursor-pointer"
          >
            <img
              src="/tarjeta2.png"
              alt="Hawkings Lab"
              className="h-full w-full object-cover rounded-3xl "
            />
            <div className="absolute top-[56%] left-[10%] ">
              <div className="flex flex-row gap-x-3 justify-start items-center ">
                <img src="/todasPersonas.png" alt="personas" className="w-10" />
                <p className=" text-[11px] text-white jus">+197 has joined</p>
              </div>
              <h4 className="text-white font-bold text-[20px] text-left">
                Hawkings Labs
              </h4>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.5, 0.8)}
            className="absolute bottom-[20%] left-[10%] h-[150px] w-[220px] rounded-3xl p-1.5 bg-[#5D6680] shadow-[#a34090] shadow-grande hidden lg:block cursor-pointer"
          >
            <img
              src="/tarjeta1.png"
              alt="the upside down"
              className="h-full w-full object-cover rounded-3xl "
            />
            <div className="absolute top-[56%] left-[10%] ">
              <div className="flex flex-row gap-x-3 justify-start items-center ">
                <img src="/todasPersonas.png" alt="personas" className="w-10" />
                <p className=" text-[11px] text-white jus">+264 has joined</p>
              </div>
              <h4 className="text-white font-bold text-[20px] text-left">
                The Upside Down
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
