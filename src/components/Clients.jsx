import React from "react";
import Review from "./Review";

function Clients() {
  return (
    <div
      data-scroll-section
      className='w-full min-h-screen bg-[#F1F1F1] font-["Neue_Montreal"] '
    >
      <div className="lg:px-[50px] px-[20px] border-b-[1px] border-zinc-400 pb-8 ">
        <h1 className="text-[3.7vw]  md:text-[4.7vw] opacity-85">
          Clients’ reviews
        </h1>
      </div>

      <div className="lg:px-[50px] relative px-[20px] pt-4 border-[#2324204e] flex justify-between">
        <div className="lg:flex lg:justify-between  w-[100%]">
          <ul className="opacity-85 w-[35%]">
            <li>
              <a
                href="#"
                className="all-a  after:bg-black border-black border-b-[1px] hover:border-none"
              >
                Karman Ventures
              </a>
            </li>
          </ul>
          <div className="lg:mr-12 md:mt-12 lg:mt-0 lg:opacity-85  lg:w-[45%] flex flex-col md:gap-4 lg:gap-16">
            <p className="lg:ml-16 md:opacity-95 lg:opacity-85">Services:</p>
            <div className="flex flex-wrap md:opacity-90 lg:opacity-85 mr-20 items-center lg:flex-col gap-2">
              <button className="px-3 py-[4px] btne hover:text-white bg-opacity-100  text-black hover:bg-[#000000] duration-100 ease-linear uppercase text-sm rounded-r-full rounded-l-full border-[1px] border-black">
                investor deck
              </button>
              <button className="px-3 mr-5 py-[4px] btne hover:text-white bg-opacity-100  text-black hover:bg-[#000000] duration-100 ease-linear uppercase text-sm rounded-r-full rounded-l-full border-[1px] border-black">
                sales deck
              </button>
            </div>
          </div>
          <div className="flex flex-col md:mt-8 lg:mt-0 w-[79.55%] md:gap-4  lg:gap-16">
            <p className="opacity-85 ">William Barnes</p>
            <div className="flex flex-col md:w-full lg:w-[75%] gap-4">
              <div className="lg:w-[7vw] md:w-[12.5vw] md:h-[12.5vw] lg:h-[7vw] rounded-lg overflow-hidden">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                  className="w-full h-full bg-cover bg-center"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <p className="opacity-85 md:opacity-90 lg:w-full md:w-[135%]">
                  They were transparent about the time and the stages of the
                  project. The end product is high quality, and I feel confident
                  about how they were handholding the client through the
                  process. I feel like I can introduce them to someone who needs
                  to put a sales deck together from scratch, and they would be
                  able to handhold the client experience from 0 to 100 very
                  effectively from story to design. 5/5
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="opacity-30">READ</p>
      </div>

      <div className="mt-10 w-full">
        <Review projectName="Planetly" name="Nina Walloch" />
        <Review projectName="Workiz Easy" name="Tomer Levy" />
        <Review projectName="Premium Blend" name="Ellen Kim" />
        <Review projectName="Hypercare Systems" name="Brendan Goss" />
        <Review projectName="Officevibe" name="Raff Labrie" />
        <Review projectName="Orderlion" name="Stefan Strohmer" />
        <Review projectName="Black Book" name="Jaci Smith" />
        <Review projectName="Trawa Energy" name="David Budde" />
      </div>
      <div className="border-zinc-400 border-t-[1px]"></div>

      <div className="w-full bg-[#F1F1F1] lg:h-[120vh] md:h-[150vh] ">
        <div className="Card lg:px-[50px] gap-4 flex md:flex-wrap md:pt-16 lg:pt-24 px-[20px]">
          <div className="lg:w-[50%] md:w-full relative md:h-[46vw] lg:h-[28vw] rounded-xl bg-[#004D43]">
            <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                class=""
                data-component="lazyload"
                data-animate="data-animate"
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                height="150"
                width="150"
                data-src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                data-ll-status="loaded"
                loading="lazy"
              />
            </div>

            <button
              className="btn btn--outline-green px-3 py-1 rounded-l-full rounded-r-full opacity-90 btn--small text-sm border-[1.5px] absolute left-7 bottom-7 font-semibold border-[#cdea68] text-[#CDEA68]"
              type="button"
            >
              <span className="btn__text">©2019–2022</span>
            </button>
          </div>
          <div className="lg:w-[24%] md:w-[49%] relative lg:h-[28vw] md:h-[45vw] rounded-xl bg-[#212121]">
            <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                data-component="lazyload"
                data-animate="data-animate"
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                height="150"
                width="150"
                data-src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                alt="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                data-ll-status="loaded"
                loading="lazy"
              />
            </div>

            <div className="flex relative cursor-pointer heheheh gap-2">
              <h4 className="text-sm text-[#000000c5] before:rounded-none mt-4 before:w-full before:opacity-100 before:h-full before:absolute relative before:bg-[#ffffff] before:left-0 before:-bottom-[100%] overflow-hidden  hover:before:bottom-0 before:duration-300 before:ease-in-out px-3 py-1 border-[1px] border-zinc-600 rounded-l-full rounded-r-full left-7 top-[300px]">
                <a className="text-white z-50" href="#">
                  PITCH DECK
                </a>
              </h4>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[48.9%] relative lg:h-[28vw] md:h-[45vw]  rounded-xl bg-[#212121]">
            <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                data-component="lazyload"
                data-animate="data-animate"
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                height="104"
                width="102"
                data-src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                data-ll-status="loaded"
                loading="lazy"
              />
            </div>
            <div className="flex relative cursor-pointer heheheh gap-2">
              <h4 className="text-sm text-[#000000c5] before:rounded-none mt-4 before:w-full before:opacity-100 before:h-full before:absolute relative before:bg-[#ffffff] before:left-0 before:-bottom-[100%] overflow-hidden  hover:before:bottom-0 before:duration-300 before:ease-in-out px-3 py-1 border-[1px] border-zinc-600 rounded-l-full rounded-r-full left-7 top-[300px]">
                <a className="text-white z-50" href="#">
                  BUSINESS BOOTCAMP ALUMNI
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
