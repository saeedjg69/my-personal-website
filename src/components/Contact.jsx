import { forwardRef } from "react";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { RiGitlabLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
 return (
  <div ref={ref} className="py-20">
   <div className="text-secondary flex justify-center">
    <div className="w-1/6 md:w-1/12 mt-4 mr-3 border-t-2 border-secondary"></div>
    <MdOutlinePermContactCalendar size={"25px"} className="mt-1 mr-3" />
    <h1 className="text-2xl font-bold">Contact</h1>
    <div className="w-1/6 md:w-1/12 mt-4 ml-3 border-t-2 border-secondary"></div>
   </div>
   <div className="flex justify-between w-1/2 lg:w-1/4 mx-auto mt-10 child:rounded-full child:flex child:justify-center child:items-center child:bg-white child:shadow-xl child:p-2 child-hover:scale-105 child-hover:brightness-125 child:duration-100">
    <div>
     <SiGmail size={"25px"} />
    </div>
    <a href="https://github.com/saeedjg69">
     <TbBrandGithub size={"25px"} />
    </a>
    <a href="https://gitlab.com/saeedjg69">
     <RiGitlabLine size={"25px"} />
    </a>
    <a href="https://www.linkedin.com/in/saeed-jafari-696686214">
     <FaLinkedinIn size={"25px"} />
    </a>
   </div>
  </div>
 );
});

export default Contact;
