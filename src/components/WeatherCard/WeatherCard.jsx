import "./WeatherCard.css";
import cloudy from "../../images/cloudy.svg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;F</p>
      <img className="weather-card__image" src={cloudy} alt="Cloudy" />
    </section>
  );
}

export default WeatherCard;
