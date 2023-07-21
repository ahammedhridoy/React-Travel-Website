import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trip from "../components/Trip";

export default function Home() {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg="/src/assets/12.jpg"
        title="Your Journey Your Story"
        text="Choose your favorite destination"
        btnText="Travel Plan"
        btnClass="show"
        url="/"
      />

      <Destination />
      <Trip />
    </div>
  );
}
