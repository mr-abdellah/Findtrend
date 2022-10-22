import HeroBackground from "./assets/Bg-hero.png";
import About from "./sections/About/About";
import Deals from "./sections/Deals/Deals";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";

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
    </div>
  );
}

export default App;
