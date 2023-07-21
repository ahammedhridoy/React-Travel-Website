import "./Trip.css";
import TripData from "./TripData";

export default function Trip() {
  return (
    <div className="trip">
      <h1 className="trip-title">Recent Trips</h1>
      <p className="trip-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corporis
        reprehenderit adipisci architecto, aspernatur dolore unde id nostrum,
        laudantium vero quasi nisi autem? Veniam nulla beatae consectetur soluta
        sit laborum?
      </p>
      <div className="tripcard">
        <TripData
          image="/src/assets/5.jpg"
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corporis
        reprehenderit adipisci architecto, aspernatur dolore unde id nostrum,
        laudantium vero quasi nisi autem? Veniam nulla beatae consectetur soluta
        sit laborum?"
        />
        <TripData
          image="/src/assets/6.jpg"
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corporis
        reprehenderit adipisci architecto, aspernatur dolore unde id nostrum,
        laudantium vero quasi nisi autem? Veniam nulla beatae consectetur soluta
        sit laborum?"
        />
        <TripData
          image="/src/assets/8.jpg"
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corporis
        reprehenderit adipisci architecto, aspernatur dolore unde id nostrum,
        laudantium vero quasi nisi autem? Veniam nulla beatae consectetur soluta
        sit laborum?"
        />
      </div>
    </div>
  );
}
