"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, navVariants } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import Image from "next/image";

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
          <Image
            src="/map.png"
            alt="map"
            width={1280}
            height={700}
            className="w-full h-full object-contain"
          />

          <motion.div
            variants={navVariants}
            className="absolute top-[10%] left-[8%]   md:top-[15%]  md:left-[9%]   lg:top-[18%] lg:left-[12%]
            w-[60px] h-[68px]  drop-shadow-[0px_0px_15px_#f29db0] cursor-pointer"
          >
            <Image
              src="/persona2.png"
              alt="people"
              width={60}
              height={68}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            variants={navVariants}
            className="absolute top-[35%] right-[45%]   md:top-[40%] md:right-[48%]   
            lg:top-[45%] lg:right-[50%]  w-[60px] h-[68px]   drop-shadow-[0px_0px_15px_#adb6d7] cursor-pointer"
          >
            <Image
              src="/persona3.png"
              alt="people"
              width={60}
              height={68}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            variants={navVariants}
            className="absolute bottom-[10%] right-[10%] md:bottom-[15%]  md:right-[9%]  
            w-[60px] h-[68px] drop-shadow-[0px_0px_15px_#f6623e]  cursor-pointer"
          >
            <Image
              src="/persona1.png"
              alt="people"
              width={60}
              height={68}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.2, 0.8)}
            className="absolute top-[10%] right-[22%] h-[150px] w-[220px] rounded-3xl p-2
          bg-[rgba(255,255,255,15%)] hidden lg:block cursor-pointer "
          >
            <Image
              src="/tarjeta2.png"
              alt="Hawkings Lab"
              width={220}
              height={150}
              className="h-full w-full object-cover rounded-3xl shadow-[rgba(75,133,214,0.8)] shadow-[0px_-0px_20px_10px] "
            />
            <div className="absolute top-[56%] left-[10%] ">
              <div className="flex flex-row gap-x-3 justify-start items-center ">
                <Image
                  src="/todasPersonas.png"
                  alt="personas"
                  width={40}
                  height={20}
                  className="w-10 h-5"
                />
                <p className=" text-[11px] text-white jus">+197 has joined</p>
              </div>
              <h4 className="text-white font-bold text-[20px] text-left">
                Hawkings Labs
              </h4>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.5, 0.8)}
            className="absolute bottom-[20%] left-[10%] h-[150px] w-[220px] 
            rounded-3xl p-2 bg-[rgba(255,255,255,15%)]  hidden lg:block cursor-pointer"
          >
            <Image
              src="/tarjeta1.png"
              alt="the upside down"
              width={220}
              height={150}
              className="h-full w-full object-cover rounded-3xl shadow-[rgb(163,64,144,0.8)] shadow-[0px_-0px_20px_10px]"
            />
            <div className="absolute top-[56%] left-[10%] ">
              <div className="flex flex-row gap-x-3 justify-start items-center ">
                <Image
                  src="/todasPersonas.png"
                  alt="personas"
                  width={40}
                  height={20}
                  className="w-10 h-5"
                />
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
