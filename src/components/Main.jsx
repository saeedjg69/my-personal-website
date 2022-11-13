import { forwardRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Main = forwardRef((props, ref) => {
 return (
  <div ref={ref} className="py-20 relative">
   <img
    src={require("./../assets/img/profile.jpg")}
    alt="profile"
    className="border-4 border-secondary rounded-full w-32 h-32 mx-auto z-10 relative animate-[wiggle_3s_ease-in-out]"
   />
   <div className="text-secondary font-bold text-center text-2xl mt-4">
    <Typewriter typeSpeed={40} words={["Saeed Jafari"]} />
   </div>
   <div className="text-primary text-center text-xl">
    <Typewriter typeSpeed={100} words={["Front-end Developer"]} />
   </div>
   <div className="flex justify-between w-2/3 mx-auto mt-20 child:rounded-xl child:flex child:justify-center child:items-center child:bg-white child:w-20">
    <div>
     <img
      src={require("../assets/img/javascript.png")}
      alt="javascript"
      className="rounded-xl"
     />
    </div>
    <div>
     <img
      src={require("../assets/img/typescript.png")}
      alt="typescript"
      className="rounded-xl"
     />
    </div>
    <div>
     <img
      src={require("../assets/img/redux.png")}
      alt="redux"
      className="rounded-xl"
     />
    </div>
    <div>
     <img
      src={require("../assets/img/react.png")}
      alt="react"
      className="rounded-xl"
     />
    </div>
    <div>
     <img
      src={require("../assets/img/git.png")}
      alt="git"
      className="rounded-xl"
     />
    </div>
    <div>
     <img
      src={require("../assets/img/tailwind.png")}
      alt="tailwind"
      className="rounded-xl"
     />
    </div>
    <div>
     <img
      src={require("../assets/img/bootstrap.png")}
      alt="bootstrap"
      className="rounded-xl"
     />
    </div>
   </div>
   <div className="absolute right-20 top-36 w-1/3 h-full border-t-4 border-r-4 rounded-tr-xl border-secondary"></div>
   <div className="absolute left-20 top-36 w-1/3 h-full border-t-4 border-l-4 rounded-tl-xl border-secondary"></div>
  </div>
 );
});

export default Main;
