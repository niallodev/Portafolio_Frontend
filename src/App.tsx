import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Certificate from './components/Certificate.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="page-surface min-h-screen">
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
