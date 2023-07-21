import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import "../components/Hero.css";

export default function About() {
  return (
    <div>
      <Hero cName="hero" heroImg="/src/assets/night.jpg" title="About" />
      <AboutUs />
    </div>
  );
}
