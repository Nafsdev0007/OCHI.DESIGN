import React from "react";

function Review({ projectName, name }) {
  return (
    <>
      <div className="w-full">
        <div className="border-t-[1px]  text-base w-full py-4 flex justify-between border-zinc-400  lg:px-[50px] px-[20px]">
          <ul className="opacity-85 md:opacity-90 w-32">
            <li>
              <a
                href="#"
                className="all-a  after:bg-black border-black border-b-[1px] hover:border-none"
              >
                {projectName}
              </a>
            </li>
          </ul>

          <div className=" w-20 md:hidden lg:block whitespace-nowrap">
            <p className="opacity-85">{name}</p>
          </div>

          <ul className="opacity-90">
            <li>
              <a
                href="#"
                className="all-a  after:bg-black border-black border-b-[1px] hover:border-none"
              >
                READ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Review;
