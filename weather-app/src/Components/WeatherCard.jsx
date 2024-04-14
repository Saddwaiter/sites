/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDate } from "./../Utils/useDate";
import sun from "../assets/icons/sun.jpg";
import cloud from "../assets/icons/clouds.jpg";
import fog from "../assets/icons/fog.jpg";
import rain from "../assets/icons/rain.jpg";
import snow from "../assets/icons/snow.jpg";
import storm from "../assets/icons/storm.jpg";
import wind from "../assets/icons/wind.jpg";
import "../index.css";

const WeatherCard = ({
  tempreture,
  windSpeed,
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
    }
  }, [iconString]);
  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className=" flex w-full justify-center, items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weatherIcon" />
        <p className=" font-bold text-5xl flex justify-center items-center">
          {tempreture} &deg;C
        </p>
      </div>
      <div className=" font-bold text-center text-xl">{place}</div>
      <div className=" w-full flex justify-between items-center mt-4">
        <p className=" flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className=" flex-1 text-center p-2">{time}</p>
      </div>
      <div className=" w-full flex justify-between items-center mt-4 gap-4">
        <p className=" flex-1 text-center  p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind speed <p className=" font-normal ">{windSpeed}</p>
        </p>
        <p className=" flex-1 text-center p-2 font-bold rounded-lg bg-green-600 ">
          Humidity <p className=" font-normal">{humidity}</p>
        </p>
      </div>
      <div className=" w-full p-3 mt-4 flex justify-between items-center">
        <p className=" font-semibold text-lg">Heat Index </p>
        <p className="text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className=" bg-slate-600" />
      <div className=" w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
