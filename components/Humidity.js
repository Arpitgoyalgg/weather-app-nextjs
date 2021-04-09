export default function Humidity(props) {
  return (
    <>
      <div className="big-card">
        <h3>Humidity</h3>
        <div class="humidity">
          <h1>{props.humidity}</h1>
          <img src="/humidity.svg" />
        </div>
      </div>
    </>
  );
}
