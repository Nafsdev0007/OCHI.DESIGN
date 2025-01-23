import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' data-scroll-delay='.3' data-scroll-direction='horizontal' className='w-full  py-24 rounded-tl-2xl rounded-tr-2xl text-white font-["Founders_Grotesk_Medium"] uppercase tracking-[-1.2vw] bg-[#004D43]'>
      <div className="text border-t-[1px] border-b-[1px]  border-[#4D837C] flex whitespace-nowrap items-center ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none -mb-20 pr-16 pt-12"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none -mb-20 pr-16 pt-12"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none -mb-20 pr-16 pt-12"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
