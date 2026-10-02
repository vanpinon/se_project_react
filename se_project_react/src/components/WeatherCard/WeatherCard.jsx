import "./WeatherCard.css";
import cloudy from "../../images/cloudy.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg;F</p>
      <img className="weather-card__image" src={cloudy} alt="Cloudy" />
    </section>
  );
}

export default WeatherCard;
