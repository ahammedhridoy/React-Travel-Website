import "./Destination.css";
import DestinationData from "./DestinationData";

export default function Destination() {
  return (
    <div className="destination">
      <h1 className="text-center">Popular Destination</h1>
      <p className="text-center">
        Tour give you the opportunity to see a lot within a time frame!
      </p>

      <DestinationData
        className="first-des"
        heading="Tall Volcano"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est quis a architecto, dolorem recusandae assumenda natus? Repellendus, sed ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui culpa tempora minus itaque facilis, accusantium aut incidunt impedit, harum, et maxime necessitatibus ducimus reiciendis! Maiores dolorum illo molestiae quod?"
        img1="/src/assets/1.jpg"
        img2="/src/assets/2.jpg"
      />

      <DestinationData
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est quis a architecto, dolorem recusandae assumenda natus? Repellendus, sed ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui culpa tempora minus itaque facilis, accusantium aut incidunt impedit, harum, et maxime necessitatibus ducimus reiciendis! Maiores dolorum illo molestiae quod?"
        img1="/src/assets/5.jpg"
        img2="/src/assets/8.jpg"
        className="first-des-reverse"
      />
    </div>
  );
}
