import React, { useEffect, useState } from "react";

function Contact() {
  const [rotate, setRotate] = useState(null);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      let mainVal = angle - 180;
      setRotate(mainVal);
    });
  }, []);

  return (
    <div className='lg:h-[140vh] rounded-tl-2xl rounded-tr-2xl relative font-["Founders_Grotesk_Medium"] w-full bg-[#CDEA68]'>
      <div className="flex justify-center items-center w-full md:py-36 lg:h-[90vh] lg:pt-60 ">
        <h1 className="uppercase  text-[12vw] leading-[10.5vw] w-30 inline-block font-black text-[#212121]">
          <span className="lg:ml-72 md:ml-56">Ready</span> <br />
          <span className="lg:ml-44 md:ml-36"> to start</span> <br />
          <span>the project?</span>
        </h1>
      </div>

      <div className=" absolute flex top-[45%] gap-10 left-1/2 -translate-x-[50%] -translate-y-[100%]">
        <div className="lg:h-[12vw] md:h-[18vw] md:w-[18vw] flex justify-center items-center rounded-full lg:w-[12vw] bg-zinc-100">
          <div className="w-[55%] relative h-[56%] bg-[#212121] rounded-full">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4"
            >
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="lg:h-[12vw] md:h-[18vw] md:w-[18vw] rounded-full flex justify-center items-center lg:w-[12vw] bg-zinc-100">
          <div className="w-[55%] relative h-[56%] bg-[#212121] rounded-full">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4"
            >
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center pb-32 flex-col gap-4 lg:py-10">
        <button className="ab-btn2 mt-4 rounded-l-full rounded-r-full">
          <p>START THE PROJECT</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="border-white border-[1px] rounded-full opacity-90"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </button>
        <p className="text-sm text-[#212121] font-light opacity-85">OR</p>
        <button className="ab-btn2  rounded-l-full rounded-r-full">
          <p>NAFSDEV007@GMAIL</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="border-white border-[1px] rounded-full opacity-90"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Contact;
