import Hero from "../components/Hero";
import "../components/Hero.css";
import Trip from "../components/Trip";
export default function Service() {
  return (
    <div>
      <Hero cName="hero" heroImg="/src/assets/night.jpg" title="Service" />
      <Trip />
    </div>
  );
}
