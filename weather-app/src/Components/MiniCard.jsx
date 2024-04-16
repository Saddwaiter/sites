/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import sun from "../assets/icons/sun.svg";
import cloud from "../assets/icons/cloud.svg";
import fog from "../assets/icons/fog.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snow.svg";
import storm from "../assets/icons/storm.svg";
import wind from "../assets/icons/wind.svg";

const MiniCard = ({time, temp, iconString}) => {
  const [icon, setIcon] = useState() 

  useEffect(()=>{
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
      else if (iconString.toLowerCase().includes("overcast")) {
        setIcon(cloud);
      }
      else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      }
    }
  }, [iconString])
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className=" text-center">
        {new Date(time).toLocaleTimeString('en',{weekday: 'long'}).split(" ")[0]}
      </p>
      <hr />
      <div className=" w-full flex justify-center items-center flex-1">
        <img src={icon} alt="forecast not avaliable" className='w-[4rem] h-[4rem]' />
      </div>
      <p className=" text-center font-bold">{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard