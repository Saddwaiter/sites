/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDate } from "./../Utils/useDate";
import sun from "../assets/icons/sun.svg";
import cloud from "../assets/icons/cloud.svg";
import fog from "../assets/icons/fog.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snow.svg";
import storm from "../assets/icons/storm.svg";
import wind from "../assets/icons/wind.svg";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("sun")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
      else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      }
      else if (iconString.toLowerCase().includes("overcast")) {
        setIcon(cloud);
      }
    }
  }, [iconString]);
  const displayHeatIndex = heatIndex !== null && heatIndex !== undefined ? heatIndex : temperature;
  return (
    <div className="w-[22rem] min-w-[22rem] h-[35rem] glassCard p-4">
      <div className=" flex w-full justify-center, items-center mt-12 ">
        <img src={icon} alt="weatherIcon" className="w-40 h-40"/>
        <p className=" font-bold text-4xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className=" font-bold text-center text-xl">{place}</div>
      <div className=" w-full flex justify-between items-center mt-4">
        <p className=" flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className=" flex-1 text-center p-2">{time}</p>
      </div>
      <div className=" w-full flex justify-between items-center mt-4 gap-4">
        <p className=" flex-1 text-center  p-2 font-bold bg-gray-400 shadow rounded-lg">
          Wind speed <p className=" font-normal ">{windspeed} km/h</p>
        </p>

        <p className=" flex-1 text-center p-2 font-bold rounded-lg bg-blue-400 ">
          Humidity <p className=" font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className=" w-full p-3 mt-4 flex justify-between items-center">
        <p className=" font-semibold text-lg">Heat Index </p>
        <p className="text-lg font-bold">{displayHeatIndex}°C</p>
      </div>
      <hr className=" bg-slate-600" />
      <div className=" w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
