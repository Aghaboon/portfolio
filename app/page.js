import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import WorkExperince from "./components/WorkExperince";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Awards from "./components/Awards";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 py-4">
        <HeroSection />
        <AboutSection />
        <Education />
        <WorkExperince />
        <ProjectsSection />
        <Skills />
        <Awards />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
