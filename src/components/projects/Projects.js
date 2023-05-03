import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="CLICK ON THE PROJECTS TO SEE THE DEPLOYED WEBSITE"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="https://rakeshmk1.github.io/Youtube_clone/">
          <ProjectsCard
            title="YouTube CLONE"
            des="The objective of this project is to create a YouTube clone website 
                 using HTML, CSS, and JavaScript. it is responsive website."
            src={projectOne}
          />
        </a>
        <a href="https://rakeshmk1.github.io/Myntra_clone/">
          <ProjectsCard
            title="Myntra CLONE"
            des=" The goal of this project is just to create an exact e-commerce website 
                  using HTML, CSS this is just user interface."
            src={projectTwo}
          />
        </a>
        <a href="https://rakeshmk1.github.io/Spotify_clone/">
          <ProjectsCard
            title="Spotify CLONE"
            des=" The goal of this project is to create a Spotify clone website using HTML,
                  CSS, and JavaScript. The website will allow users to browse music, play music, 
                  and listen to their favorite songs.
            "
            src={projectThree}
          />
        </a>
        <a href="https://rakeshmk1.github.io/Drawing_Canvas./">
          <ProjectsCard
            title="Drawing Canvas"
            des=" The objective of this project is to create a canvas website using HTML, 
                  CSS, and JavaScript. The website will allow users to create and share digital
                  art using a canvas interface."
            src={projectFour}
          />
        </a>
        <a href="https://rakeshmk1.github.io/To-Do_List/">
          <ProjectsCard
            title="To-Do-List"
            des=" The goal of this project is to create a todo list website using HTML, 
                  CSS, and JavaScript. The website will allow users to create, manage, and 
                  organize their tasks.
            "
            src={projectFive}
          />
        </a>
        <a href="https://rakeshmk1.github.io/Country_Guide/">
          <ProjectsCard
            title="Country Guide"
            des=" The objective of this project is to create a country guide website using
                 HTML, CSS, and JavaScript. The website will provide users with information
                 about different countries, including their population, languages they speak,
                 currency, and capital."
            src={projectSix}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
