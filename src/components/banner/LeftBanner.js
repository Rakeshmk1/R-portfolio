import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiHtml5, SiJavascript, SiCss3 } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Coder.", "Frontend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Rakesh Mohan Kumar
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Frontend Developer with expertise in HTML, CSS, JavaScript, and
          popular frontend frameworks/libraries such as React, tailwind css, and
          bootstrap, with a focus on creating responsive and user-friendly web
          applications.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Rakeshmk1">
              <span className="bannerIcon">
                <FaGithubSquare />
              </span>
            </a>
            <a href="https://www.instagram.com/_rakesh_mk/">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/rakesh-mohan-kumar-332643100/">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
