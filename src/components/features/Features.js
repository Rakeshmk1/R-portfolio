import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="HTML & CSS"
          des="defining the visual style of a web page, including colors, fonts, layouts, and animations."
        />
        <Card
          title="Performance"
          des="I ensure that they load quickly and efficiently. This can involve techniques
          like image optimization, code minification, and caching."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Responsive Design"
          des="It's important for web pages to be optimized for different screen sizes.
           so i make Responsive designs that allows web pages to adapt to different
            devices and screen sizes, ensuring that they are easily accessible
            and usable for all users."
          icon={<SiProgress />}
        />
        {
          <Card
            title="Frameworks and Libraries"
            des=" I use frameworks and libraries like React,
           bootstrap, and tailwind css to streamline development and improve code organization. 
           These tools can provide pre-built components, routing, and state management."
            icon={<FaMobile />}
          />
        }
        {
          <Card
            title="React & its DOM Manupulation"
            des="I often use in conjunction with other libraries and tools,
           such as Redux for state management and React Router for handling routing in
          single-page applications & i know intuitive way to manipulate the DOM using JSX."
            icon={<SiAntdesign />}
          />
        }
        {
          <Card
            title="Testing"
            des=" since I know how to use SELENIUM WEBDRIVERS, i can test the code to ensure that it functions
           as expected and is free of bugs. Testing can involve unit tests, 
           integration tests, and end-to-end tests."
            icon={<FaGlobe />}
          />
        }
      </div>
    </section>
  );
};

export default Features;
