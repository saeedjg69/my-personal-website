import { forwardRef } from "react";
import { AiOutlineProject } from "react-icons/ai";
import Card from "./Card";

const Projects = forwardRef((props, ref) => {
 return (
  <div ref={ref} className="projects py-20">
   <div className=" text-secondary flex justify-center">
    <div className="w-1/6 md:w-1/12 mt-4 mr-3 border-t-2 border-secondary"></div>
    <AiOutlineProject size={"25px"} className="mt-1 mr-3" />
    <h1 className="text-2xl font-bold">Projects</h1>
    <div className="w-1/6 md:w-1/12 mt-4 ml-3 border-t-2 border-secondary"></div>
   </div>
   <div className="w-11/12 lg:w-3/4 mx-auto mt-10 flex justify-center flex-wrap gap-8">
    <Card
     name="academy-project"
     desc="Sepehr Academy Project with React.js"
     technologies="React.js / Node.js / Rest API / Redux Toolkit"
     git="My-React-Project"
     responsive
    />
    <Card
     name="my-personal-website"
     desc="Sepehr Academy Project with React.js"
     technologies="React.js / TailwindCss"
     git="my-personal-website"
     responsive
    />
   </div>
  </div>
 );
});

export default Projects;
