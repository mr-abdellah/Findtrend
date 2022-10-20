import Navbar from "./sections/Navbar";
import HeroBackground from "./assets/Bg-hero.png";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="APP">
      <div className="header" style={{ backgroundImage: `url(${HeroBackground})` }}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
