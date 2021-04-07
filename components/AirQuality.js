import GaugeChart from "react-gauge-chart";

export default function AirQuality(props) {
  let aqiPercentage;
  let review;
  if (props.aqi == 1) {
    aqiPercentage = 0.1;
    review = "Good";
  } else if (props.aqi == 2) {
    aqiPercentage = 0.3;
    review = "Fair";
  } else if (props.aqi == 3) {
    aqiPercentage = 0.5;
    review = "Moderate";
  } else if (props.aqi == 4) {
    aqiPercentage = 0.7;
    review = "Poor";
  } else {
    aqiPercentage = 1;
    review = "Very Poor";
  }
  return (
    <>
      <div className="big-card">
        <h3>Air Quality</h3>

        <GaugeChart
          id="gauge-chart5"
          nrOfLevels={420}
          arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
          colors={["#5BE12C", "#F5CD19", "#EA4228"]}
          percent={aqiPercentage}
          arcPadding={0.02}
          textColor="#000000"
          needleColor="#F89533"
          formatTextValue={(value) => review}
        />
      </div>
    </>
  );
}
