import { forwardRef } from "react";
import { CgProfile } from "react-icons/cg";

const About = forwardRef((props, ref) => {
 return (
  <div ref={ref} className="about py-20">
   <div className=" text-secondary flex justify-center">
    <div className="w-1/6 md:w-1/12 mt-4 mr-3 border-t-2 border-secondary"></div>
    <CgProfile size={"25px"} className="mt-1 mr-3" />
    <h1 className="text-2xl font-bold">About</h1>
    <div className="w-1/6 md:w-1/12 mt-4 ml-3 border-t-2 border-secondary"></div>
   </div>
   <p className="w-2/3 lg:w-1/2 mx-auto text-justify mt-3">
    Ever since I can remember I was kind of person who enjoyed to know more
    about the world around me and nowadays my world is summed up in the word
    Web. The more time passes, the more I touch the spirit of this system and
    progress in this field means progress in life for me 🪐
   </p>
  </div>
 );
});

export default About;
