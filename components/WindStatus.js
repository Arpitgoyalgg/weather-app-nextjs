export default function WindStatus(props) {
  return (
    <>
      <div className="big-card">
        <div className="wind-status">
          <h3>Wind Status</h3>
          <img src="/wind-arrow.svg" />
        </div>

        <h1 className="wind-h1">{Number((props.windSpeed).toFixed(1))} km/hr</h1>
      </div>
    </>
  );
}
