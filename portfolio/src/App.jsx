import viteLogo from "/favicon.png";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Educations from "./Pages/Educations/Educations";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact.JSX";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Home />

      <About />

      <Educations />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
