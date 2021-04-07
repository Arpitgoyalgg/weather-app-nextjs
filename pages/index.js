import Head from "next/head";
import TodayHightlights from "../components/TodayHighlights";
import TodayWeather from "../components/TodayWeather";
import WeekWeather from "../components/WeekWeather";

export default function Home({ data }) {
  console.log(data);
  const currentTemperature = data.current.temp;
  let unix_timestamp = data.current.dt; // + data.timezone_offset;
  console.log(unix_timestamp);
  var date = new Date(unix_timestamp * 1000);
  console.log(date);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // // Will display time in 10:30:23 format
  // var formattedTime =
  //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[date.getDay()];

  var currentDay = day;
  console.log(currentDay);
  var currentTime = hours + ":" + minutes.substr(-2);
  var currentLook = data.current.weather[0].description;

  // logic for WeekWeather Component

  let weekWeatherData = data.daily;

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
        <TodayHightlights />
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
