
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";


function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </MainLayout>
  );
}

export default App;
