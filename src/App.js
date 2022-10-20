import HeroBackground from "./assets/Bg-hero.png";
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
    </div>
  );
}

export default App;
