"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search"
          height={50}
          width={50}
          className="w-6 h-6 object-contain"
        />
        <h2 className="font-extrabold text-2xl leading-[30px] text-white">
          METAVERSUS
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          height={24}
          width={24}
          className="w-6 h-6 object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
