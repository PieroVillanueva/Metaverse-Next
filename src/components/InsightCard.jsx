"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        alt={title}
        width={400}
        height={500}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-4 font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:scale-105 hover:-translate-y-3 transition-all  ease-in-out cursor-pointer group">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={40}
            height={40}
            className="w-[40%] h-[40%] group-hover:invert-[9%] group-hover:sepia-[9%] group-hover:saturate-[100%] group-hover:hue-rotate-[173deg] group-hover:brightness-[0] group-hover:contrast-[89%]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
