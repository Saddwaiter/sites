import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { MiniCard, BackgroundLayout } from "./Components";
import WeatherCard from "./Components/WeatherCard";
import { useStateContext } from "./Context";
function App() {
  const [input, setInput] = useState("");
  const { weather, location, values, place,setPlace } = useStateContext();
  //console.log(weather)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className=" w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[25rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} className=" w-[1.5rem] h-[1.5rem]" alt="search" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //submit the form
                submitCity()
              }
            }}
            type="text"
            placeholder="Type city..."
            className="focus:outline-none w-full text-black text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className=" w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[65%]">
          {values?.length > 0 ? (
            // Рендер прогнозу погоди, якщо доступні values
            <div className="flex justify-center gap-8 flex-wrap w-[70%]">
              {values.slice(1, 7).map((curr) => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                );
              })}
            </div>
          ) : (
            <p>Завантаження даних про погоду...</p>
          )}
        </div>
      </main>
    </div>
  );
}
console.log(typeof values);

export default App;
