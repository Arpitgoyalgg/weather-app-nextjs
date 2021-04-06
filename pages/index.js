import Head from "next/head";
import TodayHightlights from "../components/TodayHighlights";
import TodayWeather from "../components/TodayWeather";
import WeekWeather from "../components/WeekWeather";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TodayWeather />
      <div className="right-part">
        <WeekWeather />
        <TodayHightlights />
      </div>
    </>
  );
}
