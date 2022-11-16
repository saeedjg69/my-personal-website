import { forwardRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Main = forwardRef((props, ref) => {
 return (
  <div ref={ref} className="main py-20 relative">
   <img
    src={require("./../assets/img/profile.jpg")}
    alt="profile"
    className="border-4 border-secondary rounded-full w-32 h-32 mx-auto z-10 relative animate-[wiggle_0.5s_ease-in-out] shadow-2xl"
   />
   <div className="text-secondary font-bold text-center text-2xl mt-4">
    <Typewriter typeSpeed={40} words={["Saeid Jafari"]} />
   </div>
   <div className="text-primary text-center text-xl">
    <Typewriter typeSpeed={100} words={["Front-end Developer"]} />
   </div>
   <div className="flex flex-nowrap justify-around md:justify-between w-5/6 md:w-2/3 mx-auto mt-20  child:rounded-xl child:flex child:justify-center child:items-center child:bg-white child:w-1/12 child:shadow-xl">
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
   <div className="absolute right-3 md:right-20 top-36 w-2/3 h-full border-t-4 border-r-4 rounded-tr-xl border-secondary"></div>
   <div className="absolute left-3 md:left-20 top-36 w-2/3 h-full border-t-4 border-l-4 rounded-tl-xl border-secondary"></div>
  </div>
 );
});

export default Main;
