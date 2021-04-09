import Head from "next/head";
import TodayHightlights from "../components/TodayHighlights";
import TodayWeather from "../components/TodayWeather";
import WeekWeather from "../components/WeekWeather";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home({ data, airData }) {
  console.log(data);
  console.log(airData);

  const currentTemperature = data.current.temp;
  let unix_timestamp_live = data.current.dt + data.timezone_offset;
  let unix_timestamp_sunrise = data.current.sunrise + data.timezone_offset;
  let unix_timestamp_sunset = data.current.sunset + data.timezone_offset;

  var dateForLiveTime = new Date(unix_timestamp_live * 1000);
  var dateForSunrise = new Date(unix_timestamp_sunrise * 1000);
  var dateForSunset = new Date(unix_timestamp_sunset * 1000);

  console.log(dateForLiveTime.toUTCString());

  var hoursLive = dateForLiveTime.getUTCHours();

  console.log(hoursLive);

  var minutesLive = "0" + dateForLiveTime.getUTCMinutes();

  console.log(minutesLive);

  var hoursSunrise = dateForSunrise.getUTCHours();

  var minutesSunrise = "0" + dateForSunrise.getUTCMinutes();

  var hoursSunset = dateForSunset.getUTCHours();

  var minutesSunset = "0" + dateForSunset.getUTCMinutes();

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var currentDay = weekday[dateForLiveTime.getDay()];

  var currentTime = hoursLive + ":" + minutesLive.substr(-2);
  var sunrise = hoursSunrise + ":" + minutesSunrise.substr(-2);
  var sunset = hoursSunset + ":" + minutesSunset.substr(-2);

  var currentLook = data.current.weather[0].description;

  let weekWeatherData = data.daily;
  let windSpeed = Math.round(data.current.wind_speed * 3.6 * 100) / 100;
  let uvIndex = data.current.uvi;
  let humidity = data.current.humidity;
  let visibility = data.current.visibility;
  let aqi = airData.list[0].main.aqi;
  let currentIcon = data.current.weather[0].icon;

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
        icon={currentIcon}
      />
      {/* <button onClick={refreshData}>Refresh</button> */}
      <div className="right-part">
        <WeekWeather props={weekWeatherData} />
        <TodayHightlights
          windSpeed={windSpeed}
          uvIndex={uvIndex}
          sunrise={sunrise}
          sunset={sunset}
          humidity={humidity}
          visibility={visibility}
          aqi={aqi}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const [data, airData] = await Promise.all([
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=26.922070&lon=75.778885&exclude=hourly,minutely&appid=${process.env.API}&units=metric`
    ).then((r) => r.json()),
    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=26.922070&lon=75.778885&appid=${process.env.API}`
    ).then((r) => r.json()),
  ]);

  return {
    props: {
      data: data,
      airData: airData,
    },
  };
}
