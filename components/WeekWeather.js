import WeekCard from "./WeekCard";

export default function WeekWeather() {
  return (
    <>
      <h2>Week</h2>
      <div className="unit-widget">
        <span className="c-widget">&#176;C</span>
        <span className="f-widget">&#176;F</span>
      </div>

      <div className="small-card-container">
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
      </div>
    </>
  );
}
