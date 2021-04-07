import GaugeChart from "react-gauge-chart";

export default function UvIndex() {
  return (
    <>
      <div className="big-card">
        <h3>UV Index</h3>
        <GaugeChart
          id="gauge-chart5"
          nrOfLevels={420}
          arcsLength={[0.3, 0.3, 0.4]}
          colors={["#5BE12C", "#F5CD19", "#EA4228"]}
          percent={0.37}
          arcPadding={0.02}
          textColor="#000000"
          needleColor="#F89533"
        />
      </div>
    </>
  );
}
