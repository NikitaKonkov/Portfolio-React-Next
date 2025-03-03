import Header from './components/Header/Header';
import Hero from './components/Hero';
import About from './components/About/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>

        <Hero />
        <About />
        <Skills />
        <Contact />
        <Projects />


      </main>
      <Footer />
    </div>
  );
}