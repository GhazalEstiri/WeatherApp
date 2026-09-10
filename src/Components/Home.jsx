import { Link } from "react-router-dom";
const cities = [
  "Tehran",
  "Paris",
  "London",
  "Tokyo",
  "New York",
  "Dubai",
  "Berlin",
  "Rome",
  "Istanbul",
  "Toronto",
];

function Home() {
  return (
    <div>
      <h1>Weather Cities</h1>
      <div className=" grid ">
        {cities.map( (city)=>{
            return(
        <Link key={city} to={`weather/${city}`} >
            {city}
        </Link>)
        })}
      </div>
    </div>
  );
}
export default Home;
