export default function SunriseSunset(props) {
  return (
    <>
      <div className="big-card sunrise-sunset">
        <h3>Sunrise and Sunset</h3>
        <div className="sunrise">
          <img src="/sunrise.svg" />
          <h2> {props.sunrise}</h2>
        </div>
        <div className="sunset">
          <img src="/sunset.svg" />
          <h2> {props.sunset}</h2>
        </div>
      </div>
    </>
  );
}
