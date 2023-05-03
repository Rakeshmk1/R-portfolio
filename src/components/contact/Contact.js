import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const Contact = () => {
  return (
    <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-content center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rakesh Mohan Kumar</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          If you are interested in discussing this opportunity further, please
          let me know. I would be more than happy to share my experience in more
          detail.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7975843113</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rakesh.rm86@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/Rakeshmk1">
            <span className="bannerIcon">
              <FaGithubSquare />
            </span>
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=new">
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/rakesh-mohan-kumar-332643100/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
