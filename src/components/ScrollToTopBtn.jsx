import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
 const [showTopBtn, setShowTopBtn] = useState(false);
 useEffect(() => {
  window.addEventListener("scroll", () => {
   if (window.scrollY > 200) {
    setShowTopBtn(true);
   } else {
    setShowTopBtn(false);
   }
  });
 }, []);

 return (
  <div className="relative">
   {showTopBtn && (
    <FaAngleUp
     className="fixed bottom-10 right-3 z-20 bg-primary h-9 w-9 text-white cursor-pointer rounded duration-200 hover:animate-none hover:bg-white hover:text-primary border-2 border-primary"
     onClick={() =>
      window.scrollTo({
       top: 0,
       behavior: "smooth",
      })
     }
    />
   )}
  </div>
 );
};
export default ScrollToTop;
