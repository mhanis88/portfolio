import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParallaxSection from './components/ParallaxSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-[--color-bg] transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <ParallaxSection direction="bottom" zIndex={2}>
          <About />
        </ParallaxSection>
        <ParallaxSection direction="left" zIndex={3}>
          <Skills />
        </ParallaxSection>
        <ParallaxSection direction="right" zIndex={4}>
          <Experience />
        </ParallaxSection>
        <ParallaxSection direction="left" zIndex={5}>
          <Portfolio />
        </ParallaxSection>
        <ParallaxSection direction="bottom" zIndex={6}>
          <Contact />
        </ParallaxSection>
      </main>
      <div className="relative" style={{ zIndex: 7 }}>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
