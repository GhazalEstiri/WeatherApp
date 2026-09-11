import { Link } from "react-router-dom";
import { cities } from "./CityCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CityMoon from "../assets/CityMoon.jpg";
function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/weather/${search.trim()}`);
  };
  return (
    <div className="p-5 flex flex-col gap-6">
      <header className="relative h-130 overflow-hidden rounded-xl">

  <img
    src={CityMoon}
    alt=""
    className="absolute inset-0 w-full h-full object-top"
  />

  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 flex flex-col items-center pt-20 gap-10 mt-30">

    <h1 className="text-white font-bold text-6xl">
      Weather Cities
    </h1>

    <div className="flex items-center gap-4 px-8 bg-[#101C2E] h-16 rounded-[50px] w-[50%]">
      
      <span className="text-3xl text-white">
        ⌕
      </span>

      <input
        type="text"
        value={search}
        className="flex-1 bg-transparent text-xl text-white placeholder:text-[#7F8EAF] outline-none"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search any city..."
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            handleSearch();
          }
        }}
      />

      <button 
        onClick={handleSearch}
        className="text-white bg-blue-600 px-5 py-2 rounded-full"
      >
        Search
      </button>

    </div>

  </div>

</header>

      <div className=" grid grid-cols-3 gap-4 mx-auto">
        {cities.map((city) => {
          return (
            <Link
              key={city.name}
              to={`/weather/${city.name}`}
              className="relative h-60 overflow-hidden rounded-xl"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20 flex items-center justify-center flex-col">
                <h2 className="text-white text-3xl font-bold">{city.name}</h2>
                <p className="text-[#ffffffc0] text-2xl">{city.country}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
