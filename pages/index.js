import Head from "next/head";
import TodayHightlights from "../components/TodayHighlights";
import TodayWeather from "../components/TodayWeather";
import WeekWeather from "../components/WeekWeather";

export default function Home({ data }) {
  console.log(data);
  const currentTemperature = data.current.temp;
  let unix_timestamp_live = data.current.dt; // + data.timezone_offset;
  let unix_timestamp_sunrise = data.current.sunrise;
  let unix_timestamp_sunset = data.current.sunset;

  var dateForLiveTime = new Date(unix_timestamp_live * 1000);
  var dateForSunrise = new Date(unix_timestamp_sunrise * 1000);
  var dateForSunset = new Date(unix_timestamp_sunset * 1000);

  var hoursLive = dateForLiveTime.getHours();

  var minutesLive = "0" + dateForLiveTime.getMinutes();

  var hoursSunrise = dateForSunrise.getHours();

  var minutesSunrise = "0" + dateForSunrise.getMinutes();

  var hoursSunset = dateForSunset.getHours();

  var minutesSunset = "0" + dateForSunset.getMinutes();

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var currentDay = weekday[dateForLiveTime.getDay()];

  // var currentDayLive = dayLive;
  // var currentDaySunrise = daySunrise;
  // var currentDaySunset = daySunset;

  var currentTime = hoursLive + ":" + minutesLive.substr(-2);
  var sunrise = hoursSunrise + ":" + minutesSunrise.substr(-2);
  var sunset = hoursSunset + ":" + minutesSunset.substr(-2);

  var currentLook = data.current.weather[0].description;

  // logic for WeekWeather Component

  let weekWeatherData = data.daily;
  let windSpeed = Math.round(data.current.wind_speed * 3.6 * 100) / 100;
  let uvIndex = data.current.uvi;
  let humidity = data.current.humidity;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TodayWeather
        currentTemp={currentTemperature}
        currentDay={currentDay}
        currentTime={currentTime}
        currentLook={currentLook}
      />
      <div className="right-part">
        <WeekWeather props={weekWeatherData} />
        <TodayHightlights
          windSpeed={windSpeed}
          uvIndex={uvIndex}
          sunrise={sunrise}
          sunset={sunset}
          humidity={humidity}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=26.922070&lon=75.778885&exclude=hourly,minutely&appid=1a45ac851c6f2ce4a4f16f5c997ba14d&units=metric"
  );
  const data = await res.json();

  // By returning { props: { posts } }, the Home component
  // will receive `data` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
