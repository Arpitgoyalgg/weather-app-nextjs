export default function SunriseSunset(props) {
  console.log(props);
  return (
    <>
      <div className="big-card">
        <h3>Sunrise and Sunset</h3>
        <h2>{props.sunrise}</h2>
        <h2>{props.sunset}</h2>
      </div>
    </>
  );
}
