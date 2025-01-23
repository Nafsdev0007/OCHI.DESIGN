import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Featured() {
  const animation = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(), 
    useAnimation(),
  ];

  const handleHover = (index) => {
    animation[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    animation[index].start({ y: "110%" });
  };

  return (
    <div
      data-scroll-section
      data-scroll
      className='z-10 w-full rounded-tl-2xl rounded-tr-2xl py-10 bg-[#F1F1F1] font-["Neue_Montreal"]'
    >
      <div className="lg:px-[50px] px-[20px] lg:mt-16 border-b-[1px] border-zinc-400 pb-10 ">
        <h1 className="text-[3.7vw] md:text-[4.7vw] tracking-wide opacity-90">
          Featured projects
        </h1>
      </div>
      <div className="lg:px-[50px] px-[20px]">
        <div className="cards w-full mt-10 flex flex-wrap gap-4">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative md:w-[48.6%] lg:w-[49.33%]"
          >
            <h1 className="absolute z-10 lg:text-8xl md:text-7xl  text-[#CDEA68] left-full top-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap leading-none tracking-tighter overflow-hidden font-['Founders_Grotesk_Medium']">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "110%" }}
                  animate={animation[0]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card-name flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#212121] rounded-full"></div>
              <h1 className="text-sm opacity-90">CARDBOARD SPACESHIP</h1>
            </div>
            <div className="w-full cursor-pointer relative mt-4 lg:h-[85vh] overflow-hidden  rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                className="w-full cursor-pointer h-full rounded-xl bg-cover bg-center"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap  cursor-pointer buttons gap-2">
              <h4>
                <a href="#">BRANDED TEMPLATE</a>
              </h4>
              <h4>
                <a href="#">SALES DECK</a>
              </h4>
              <h4>
                <a href="#">SOCIAL MEDIA TEMPLATE</a>
              </h4>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-[49.33%]"
          >
            <h1 className="absolute z-10 lg:text-8xl md:text-7xl overflow-hidden  text-[#CDEA68] right-full top-1/2 -translate-y-1/2 translate-x-1/2 whitespace-nowrap flex leading-none tracking-tighter font-['Founders_Grotesk_Medium']">
              {"AH2 & MATT HORN".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "110%" }}
                  animate={animation[1]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.01 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card-name flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#212121] rounded-full"></div>
              <h1 className="text-sm opacity-90">AH2 & MATT HORN</h1>
            </div>
            <div className="w-full relative cursor-pointer mt-4 lg:h-[85vh] overflow-hidden  rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                className="w-full cursor-pointer h-full rounded-xl bg-cover bg-center"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex cursor-pointer buttons gap-2">
              <h4>
                <a href="#">PITCH DECK</a>
              </h4>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative mt-10 md:w-[48.6%] w-[49.33%]"
          >
            <h1 className="absolute z-10 lg:text-8xl md:text-7xl overflow-hidden  text-[#CDEA68] left-full top-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap leading-none tracking-tighter font-['Founders_Grotesk_Medium']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "110%" }}
                  animate={animation[2]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>{" "}
            <div className="card-name flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#212121] rounded-full"></div>
              <h1 className="text-sm opacity-90">FYDE</h1>
            </div>
            <div className="w-full cursor-pointer relative mt-4 lg:h-[85vh] overflow-hidden  rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full cursor-pointer h-full rounded-xl bg-cover bg-center"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap cursor-pointer buttons gap-2">
              <h4>
                <a href="#">AUDIT</a>
              </h4>
              <h4>
                <a href="#">COPYWRITING</a>
              </h4>
              <h4>
                <a href="#">SALES DECK</a>
              </h4>
              <h4>
                <a href="#">SLIDES DESIGN</a>
              </h4>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative mt-10 w-[49.33%]"
          >
            <h1 className="absolute z-10 lg:text-8xl md:text-7xl overflow-hidden  text-[#CDEA68] right-full top-1/2 -translate-y-1/2 translate-x-1/2 whitespace-nowrap leading-none tracking-tighter font-['Founders_Grotesk_Medium']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "110%" }}
                  animate={animation[3]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.01}}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>{" "}
            <div className="card-name flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#212121] rounded-full"></div>
              <h1 className="text-sm opacity-90">VISE</h1>
            </div>
            <div className="w-full cursor-pointer relative mt-4 lg:h-[85vh] overflow-hidden  rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="w-full cursor-pointer h-full rounded-xl bg-cover bg-center"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap cursor-pointer buttons gap-2">
              <h4>
                <a href="#">AGENCY</a>
              </h4>
              <h4>
                <a href="#">COMPANY PRESENTATION</a>
              </h4>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(4)}
            onHoverEnd={() => handleHoverEnd(4)}
            className="cardcontainer relative mt-10 md:w-[48.6%]  lg:w-[49.33%]"
          >
            <h1 className="absolute z-10 lg:text-8xl md:text-7xl overflow-hidden  text-[#CDEA68] left-full top-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap leading-none tracking-tighter font-['Founders_Grotesk_Medium']">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "110%" }}
                  animate={animation[4]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card-name flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#212121] rounded-full"></div>
              <h1 className="text-sm opacity-90">TRAWA</h1>
            </div>
            <div className="w-full cursor-pointer relative mt-4 lg:h-[85vh] overflow-hidden  rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                className="w-full cursor-pointer h-full rounded-xl bg-cover bg-center"
                alt=""
              />
            </div>
            <div className="flex cursor-pointer flex-wrap buttons gap-2">
              <h4>
                <a href="#">BRAND IDENTITY</a>
              </h4>
              <h4>
                <a href="#">DESIGN RESEARCH</a>
              </h4>
              <h4>
                <a href="#">INVESTOR DECK</a>
              </h4>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(5)}
            onHoverEnd={() => handleHoverEnd(5)}
            className="cardcontainer relative mt-10 w-[49.33%]"
          >
            <h1 className="absolute z-10 lg:text-8xl md:text-7xl overflow-hidden  text-[#CDEA68] right-full top-1/2 -translate-y-1/2 translate-x-1/2 whitespace-nowrap leading-none tracking-tighter font-['Founders_Grotesk_Medium']">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "110%" }}
                  animate={animation[5]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>{" "}
            <div className="card-name flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#212121] rounded-full"></div>
              <h1 className="text-sm opacity-90">PREMIUM BLEND</h1>
            </div>
            <div className="w-full cursor-pointer relative mt-4 lg:h-[85vh] overflow-hidden  rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                className="w-full h-full rounded-xl bg-cover bg-center"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex cursor-pointer buttons gap-2">
              <h4>
                <a href="#">BRANDED TEMPLATE</a>
              </h4>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-44 mt-10 flex justify-center items-center">
          <button class="cta">
            <span className="text-base tracking-tight">
              SEE ALL CASE STUDIES
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
