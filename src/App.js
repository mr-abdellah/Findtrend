import Navbar from "./sections/Navbar";
import HeroBackground from "./assets/Bg-hero.png";

function App() {
  return (
    <div className="h-screen">
      <div className="w-full flex justify-center" style={{ backgroundImage: `url(${HeroBackground})` }}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
