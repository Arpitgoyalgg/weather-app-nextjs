import WeekCard from "./WeekCard";

export default function WeekWeather(props) {
  const listDays = [];
  let arr = props.props;

  arr.map(function (day, index) {
    let unix_timestamp = day.dt;
    var date = new Date(unix_timestamp * 1000);
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var dayName = weekday[date.getDay()];

    var currentDay = dayName;
    return listDays.push(
      <WeekCard
        key={index}
        dayMinTemp={day.temp.min}
        dayMaxTemp={day.temp.max}
        weekDay={currentDay}
        icon={day.weather[0].icon}
      />
    );
  });

  return (
    <>
      <h2>Today and Next 7 Days</h2>
      {/* <div className="unit-widget">
        <span className="c-widget">&#176;C</span>
        <span className="f-widget">&#176;F</span>
      </div> */}

      <div className="small-card-container">{listDays}</div>
    </>
  );
}
