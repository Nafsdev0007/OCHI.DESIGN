import React, { useEffect, useState } from "react";

function PlayingBall() {
  const [rotate, setRotate] = useState(null);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY , deltaX) * (180 / Math.PI);
      let mainVal = angle - 180;
      setRotate(mainVal);
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed='-.7' className='relative w-full bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]' loading='lazy'  >
        <div className=" absolute flex top-1/2 gap-10 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="h-[15vw] flex justify-center items-center rounded-full w-[15.5vw] bg-zinc-100">
            <div className="w-[55%] relative h-[56%] bg-[#212121] rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4"
              >
                <div className="w-4 h-full bg-zinc-100 rounded-full"></div>
              </div>
              <p className="text-white top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] opacity-85 font-medium  absolute">
                PLAY
              </p>
            </div>
          </div>
          <div className="h-[15vw] rounded-full flex justify-center items-center w-[15.5vw] bg-zinc-100">
            <div className="w-[55%] relative h-[56%] bg-[#212121] rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4"
              >
                <div className="w-4 h-full bg-zinc-100 rounded-full"></div>
              </div>
              <p className="text-white top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] opacity-85 font-medium  absolute">
                PLAY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayingBall;
