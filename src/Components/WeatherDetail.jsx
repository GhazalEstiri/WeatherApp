import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function WeatherDetails() {
  const [data, setData] = useState("");
  const { city } = useParams();
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
    <section>
      <div>
        <h1>{city}</h1>
        <p>{data.temp_C}</p>
        <p>{data.weatherDesc[0].value}</p>
      </div>
    </section>
  );
}
export default WeatherDetails;
