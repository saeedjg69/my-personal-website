import { forwardRef } from "react";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";

const Designs = forwardRef((props, ref) => {
 return (
  <div ref={ref} className="designs py-20">
   <div className=" text-secondary flex justify-center">
    <div className="w-1/6 md:w-1/12 mt-4 mr-3 border-t-2 border-secondary"></div>
    <SiAntdesign size={"25px"} className="mt-1 mr-3" />
    <h1 className="text-2xl font-bold">Designs</h1>
    <div className="w-1/6 md:w-1/12 mt-4 ml-3 border-t-2 border-secondary"></div>
   </div>
   <div className="w-11/12 lg:w-3/4 mx-auto mt-10 flex justify-center flex-wrap gap-8">
    <Card
     name="learnest"
     desc="Sepehr Academy Project with React.js"
     responsive
     technologies="TailwindCss"
    />
    <Card
     name="anyar"
     desc="Sepehr Academy Project with React.js"
     responsive
     technologies="Bootstrap"
    />
    <Card
     name="shixon"
     desc="Sepehr Academy Project with React.js"
     technologies="Html / Css"
    />
    <Card
     name="ebay"
     desc="Sepehr Academy Project with React.js"
     technologies="Html / Css"
    />
   </div>
  </div>
 );
});

export default Designs;
