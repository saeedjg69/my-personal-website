import { useRef } from "react";
import {
 About,
 Contact,
 Designs,
 Footer,
 Header,
 Main,
 Projects,
 ScrollToTop,
} from "./components";

const App = () => {
 const designsRef = useRef();
 const projectsRef = useRef();
 const mainRef = useRef();
 const aboutRef = useRef();
 const contactRef = useRef();

 return (
  <div className="bg-tertiary text-primary">
   <Header
    designsRef={designsRef}
    projectsRef={projectsRef}
    mainRef={mainRef}
    aboutRef={aboutRef}
    contactRef={contactRef}
   />
   <Main ref={mainRef} />
   <About ref={aboutRef} />
   <Designs ref={designsRef} />
   <Projects ref={projectsRef} />
   <Contact ref={contactRef} />
   <Footer />
   <ScrollToTop/>
  </div>
 );
};

export default App;
