import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import "../components/Hero.css";
export default function Contact() {
  return (
    <div>
      <Hero cName="hero" heroImg="/src/assets/2.jpg" title="ContaCT" />
      <ContactForm />
    </div>
  );
}
