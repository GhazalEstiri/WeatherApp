import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cities } from "./CityCard";
import { Droplets, Wind, Eye, WindArrowDown, Cloudy } from "lucide-react";
function WeatherDetails() {
  const [data, setData] = useState(null);
  const { city } = useParams();

  // const currentCity = cities.find((item) => item.name === city);
  const currentCity = cities.find(
    (item) => item.name.toLowerCase() === city.toLowerCase(),
  );
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
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center font-bold "
      style={{
        backgroundImage: currentCity ? `url(${currentCity.image})` : "none",
      }}
    >
      <div className="bg-[#dbdbdb9e] flex justify-center items-center rounded-[50px] w-[50%] flex-col mx-auto gap-10">
        {data && (
          <>
            <div className="flex flex-row justify-around p-5 items-center w-full">
              <h1 className="text-6xl">{city}</h1>
              <div className="flex flex-col justify-center items-center">
                <p className="flex flex-row text-3xl justify-center items-center gap-4">
                  <Cloudy size={60} />
                  {data.temp_C} °C
                </p>
                <p className="flex flex-row text-3xl">
                  {data.weatherDesc[0].value}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-10 p-4 w-[90%] justify-center items-center">
              <p className="flex flex-row border-r-2 p-4 gap-2">
                <span>
                  {" "}
                  <Eye />
                </span>
                {data.visibility} km
              </p>
              <p className="flex flex-row  border-r-2 p-4 gap-2">
                <span>
                  {" "}
                  <Droplets />
                </span>
                {data.humidity} %
              </p>
              <p className="flex flex-row  border-r-2 p-4 gap-2">
                <span>
                  <Wind />
                </span>
                {data.windspeedKmph} km/h
              </p>
              <p className="flex flex-row  border-r-2 p-4 gap-2">
                <span>
                  <WindArrowDown />
                </span>
                {data.pressure} mmHg
              </p>
            </div>
            <p className="flex flex-row text-5xl">{data.observation_time}</p>
            <p className="flex flex-row text-6xl justify-center items-center">
              <span className="text-8xl flex flex-row items-center">☁️</span>
              {data.cloudcover}%
            </p>
          </>
        )}
      </div>
    </section>
  );
}
export default WeatherDetails;
