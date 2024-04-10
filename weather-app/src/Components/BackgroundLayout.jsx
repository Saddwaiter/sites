import Clear from "../assets/icons/clear.jpg"
import Sunny from "../assets/icons/sunny.jpg"
import Fog from 'https://www.bing.com/ck/a?!&&p=71fd4d525053e8c4JmltdHM9MTcxMjYyMDgwMCZpZ3VpZD0xOWVlMzYyYy1kYTM0LTZhMmQtM2Y5ZS0yN2E0ZGUzNDY4NmUmaW5zaWQ9NTU1MQ&ptn=3&ver=2&hsh=3&fclid=19ee362c-da34-6a2d-3f9e-27a4de34686e&u=a1L2ltYWdlcy9zZWFyY2g_cT1mb2clMjBpbWFnZSUyMGpwZyZGT1JNPUlRRlJCQSZpZD04MkE1Njg1NTc0RDZDRjkwMzY1ODVDNUREMDk5QzVDNTRDQzk2NEQ0&ntb=1'
import Cloudy from "../assets/icons/cloudy.jpg";
import Rainy from "../assets/icons/rain.jpg";
import Snow from "../assets/icons/snowy.jpg";
import Stormy from "../assets/icons/stormy.jpg";
import { useStateContext } from "../Context";
import { useEffect, useState } from "react";

//Weather images

const BackgroundLayout = () => {

  const { weather } = useStateContext();

  const { image, setImage } = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLoverCase().includes("clear")) {
        setImage(Clear);
      }else if (imageString.toLoverCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.toLoverCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLoverCase().includes("snow")) {
        setImage(Snow);
      } else if (imageString.toLoverCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLoverCase().includes("thunder") ||
        imageString.toLoverCase().includes("storm")
      ) {
        setImage(Stormy);
      }  else if (imageString.toLoverCase().includes("sunny")) {
          setImage(Sunny);
      }
    }
  }, [weather]);
  return (
    <img
      src={image}
      alt="weatherImage"
      className="h-screen w-full fixed left-0 top-0 -z-[]"
    />
  );
};

export default BackgroundLayout;
