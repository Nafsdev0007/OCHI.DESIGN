import React from "react";

function About() {
  return (
    <div  data-scroll data-scroll-speed='-.2' className=" py-10 rounded-tl-2xl rounded-tr-2xl font-['Neue_Montreal'] bg-[#CDEA68]">
      <div className="lg:px-[50px] pb-16 px-[20px] lg:w-[95%] md:w-[100%] pt-12 text-[#212121] md:text-[4.7vw] font-['Neue_Montreal'] lg:text-[3.85vw] leading-none">
        <h1>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <span className="underline">raise funds</span>
          ,<span className="underline"> sell prod­ucts</span>,
          <span className="underline"> ex­plain com­plex ideas</span>, and{" "}
          <span className="underline">hire great peo­ple</span>.
        </h1>
      </div>
      <div className="border-t-[1px] border-b-[1px] opacity-85 lg:px-[50px] px-[20px] pt-4 border-[#2324204e] flex justify-between">
        <p>What you can expect:</p>
        <div className="lg:mr-36 flex mb-28 justify-between items-end h-[35vh] md:w-[64vw] lg:w-[35.5vw]">
          <div className="lg:w-[60%] md:w-[50%] flex flex-col gap-8 h-full">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="">
              We believe the mix of strategy and <br className="lg:block hidden" /> design (with a bit of
              coffee) is what <br className="lg:block hidden" /> makes your message clear, convincing,
              <br className="lg:block hidden" /> and captivating.
            </p>
          </div>
          <div>
            <div className="font-light">
              <p className="py-2">S:</p>
              <ul>
                <li>
                  <a
                    href="#"
                    className="all-a after:bg-black border-black border-b-[1px] hover:border-none"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="all-a after:bg-black border-black border-b-[1px] hover:border-none"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="all-a after:bg-black border-black border-b-[1px] hover:border-none"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="all-a after:bg-black border-black border-b-[1px] hover:border-none"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[50px] flex justify-between px-[20px] ">
        <div>
          <h1 className="pt-4 md:text-[4.7vw] text-[#212121] font-['Neue_Montreal'] lg:text-[3.85vw] leading-none">Our approach:</h1>
          <button className="ab-btn mt-4 rounded-l-full rounded-r-full">
            <p>READ MORE</p>
            <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
          </button>
        </div>
                
        <div className="w-[49.5%] lg:h-[71vh] md:h-[52vh] rounded-xl mt-4">
          <img className="w-full md:h-[90%] h-full object-cover rounded-xl  " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" loading="lazy" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default About;
