export default function TodayWeather(props) {
  let image = "";
  if (props.icon === "11d" || props.icon === "11n") {
    image = "/thunderstorm.svg";
  } else if (props.icon === "09d" || props.icon === "09n") {
    image = "/shower-rain.svg";
  } else if (props.icon === "10d" || props.icon === "10n") {
    image = "/rain.svg";
  } else if (props.icon === "13d" || props.icon === "13n") {
    image = "/snow.svg";
  } else if (props.icon === "09d" || props.icon === "09n") {
    image = "/rain.svg";
  } else if (props.icon === "50d" || props.icon === "50n") {
    image = "/mist.svg";
  } else if (props.icon === "01d" || props.icon === "01n") {
    image = "/clear-sky.svg";
  } else if (props.icon === "02d") {
    image = "/few-clouds-day.svg";
  } else if (props.icon === "02n") {
    image = "/few-clouds-night.svg";
  } else if (props.icon === "03d" || props.icon === "03n") {
    image = "/scattered-clouds.svg";
  } else if (props.icon === "04d") {
    image = "/broken-clouds-day.svg";
  } else if (props.icon === "04n") {
    image = "/broken-clouds-night.svg";
  } else {
    image = "/mist.svg";
  }

  return (
    <>
      <div className="left-part">
        <div className="left-center">
          {/* div to contain all the elements in the left part */}

          <img src={image} />
          <div>
            <span style={{ fontSize: "80px", fontWeight: "lighter" }}>
              {props.currentTemp} <sup className="left-degree"> &#8451;</sup>
            </span>
          </div>
          <span>
            <strong>{props.currentDay}, </strong>
          </span>
          <span>{props.currentTime}</span>
          <hr />
          <h4 className="capatalize">{props.currentLook}</h4>
        </div>
      </div>
    </>
  );
}
