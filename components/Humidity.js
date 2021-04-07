export default function Humidity(props) {
  return (
    <>
      <div className="big-card">
        <h3>Humidity</h3>
        <h1>{props.humidity} %</h1>
      </div>
    </>
  );
}
