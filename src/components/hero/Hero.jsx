import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume Ferry.pdf";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200`}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-3xl font-bold sm:text-[2rem]"
            >
              Hallo Semua, Saya<br/>
              <span className="text-5xl"> I Putu Ferry Setiawan</span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "IT Support",
                2000,
                "Network Engineer",
                2000,
                "Web Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-900 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Saya mahasiswa lulusan STMIK Palangka Raya, memiliki bakat dalam troubleshooting software dan hardware komputer.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-white bg-black border-blue px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-blue-500"
              download
            >
              <div className="flex items-center gap-1">
                Download CV <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://www.instagram.com/iferry_/">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/iputuferrysetiawan">
                  {""}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{""}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/i-putu-ferry-setiawan-a218b9277/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <br/>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
  <div className="relative h-[80%] w-fit flex items-center sm:items-end">
    <img
      data-aos="fade-up"
      className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-full"
      src="src/assets/hero.png"
      alt="mine"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
