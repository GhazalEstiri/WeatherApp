import { Link } from "react-router-dom";
import { cities } from "./CityCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/weather/${search.trim()}`);
  };
  return (
    <div className="p-5 ">
      <h1 className="flex justify-center items-center p-10  text-white font-bold text-6xl">
        Weather Cities
      </h1>

      <div className="flex items-center gap-4 p-8  bg-[#101C2E] h-10 rounded-[50px] mb-5 w-[50%] justify-between mx-auto">
        <div className="flex flex-row gap-4">
          <span className="text-3xl text-[#fbfcfd]">⌕</span>
          <input
            type="text"
            value={search}
            className=" bg-transparent text-xl text-white placeholder:text-[#7F8EAF] outline-none"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search any city..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>

        <button onClick={handleSearch} className="text-white bg-">Search</button>
      </div>

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
