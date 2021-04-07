import UvIndex from "./UvIndex";
import WindStatus from "./WindStatus";
import SunriseSunset from "./SunriseSunset";
import Humidity from "./Humidity.js";
import Visibility from "./Visibility";
import AirQuality from "./AirQuality";

export default function TodayHightlights(props) {
  return (
    <>
      <h2>Today's Hightlights</h2>
      <div className="big-card-container">
        <UvIndex />
        <WindStatus windSpeed={props.windSpeed} />
        <SunriseSunset />
        <Humidity />
        <Visibility />
        <AirQuality />
      </div>
    </>
  );
}
