export default function WeekCard(props) {
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
      <div className="small-card">
        <h4>{props.weekDay}</h4>
        <img src={image} />
        <div className="temp">
          <h4>{props.dayMaxTemp}&#176;</h4>
          <h4 className="min-temp">{props.dayMinTemp}&#176;</h4>
        </div>
      </div>
    </>
  );
}
