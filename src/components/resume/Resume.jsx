import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-blue-400 sm:text-2xl text-center">
          Resume
        </h3>
        <br/>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  IT Support
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Freelance
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  Year 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                I execute my skills by working on several projects given to me, I have helped several of my clients to assemble computers, reinstall them and so on.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                STMIK Palangka Raya
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Teknik Informatika
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  Year 2020 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                I studied at STMIK Palangka Raya with a study period of 4 years. I am active in organizations and always complete my responsibilities as a student and member of an organization.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Resume;
