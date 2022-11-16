import MyPDF from "../assets/file/Resume-Saeed_Jafari.pdf";

const Header = ({ designsRef, projectsRef, aboutRef, contactRef, mainRef }) => {
 const handleScroll = (e) => {
  e.current.scrollIntoView({ behavior: "smooth" });
 };

 return (
  <div className="header sticky top-0 z-20 border-b-2 border-primary bg-tertiary">
   <a
    href={MyPDF}
    target="_blank"
    className="absolute right-0 mr-5 mt-2 border border-secondary hover:border-white rounded text-secondary hover:bg-secondary hover:text-white p-2 duration-200"
   >
    Download CV
   </a>
   <ul className="xl:w-1/3 w-2/3 md:w-1/2 md:mx-auto py-4 flex justify-evenly md:justify-between child:cursor-pointer child-hover:text-white child:duration-200 child:text-sm md:child:text-lg">
    <li onClick={() => handleScroll(mainRef)}>Main</li>
    <li onClick={() => handleScroll(aboutRef)}>About</li>
    <li onClick={() => handleScroll(projectsRef)}>Projects</li>
    <li onClick={() => handleScroll(designsRef)}>Designs</li>
    <li onClick={() => handleScroll(contactRef)}>Contact</li>
   </ul>
  </div>
 );
};

export default Header;
