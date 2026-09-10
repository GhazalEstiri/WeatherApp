import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cities } from "./CityCard";

function WeatherDetails() {
  const [data, setData] = useState(null);
  const { city } = useParams();

  const currentCity = cities.find((item) => item.name === city);
  //   console.log(city)
  useEffect(() => {
    fetch(`https://wttr.in/${city}?format=j1&lang=fa`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.current_condition[0]);
        setData(data.current_condition[0]);
      });
  }, [city]);

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentCity.image})`,
      }}
    >
      <div>
        <h1>{city}</h1>
        {data && (
          <>
            <p>{data.temp_C} °C</p>
            <p>{data.weatherDesc[0].value}</p>
          </>
        )}
      </div>
    </section>
  );
}
export default WeatherDetails;
