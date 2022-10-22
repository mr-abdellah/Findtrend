import HeroBackground from "./assets/Bg-hero.png";
import About from "./sections/About/About";
import Deals from "./sections/Deals/Deals";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import NewsLetter from './sections/NewsLetter/NewsLetter';

function App() {
  return (
    <div className="APP">
      <div
        className="header"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <Navbar />
        <Hero />
      </div>

      <FeatureSection />
      <About />
      <Deals />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
