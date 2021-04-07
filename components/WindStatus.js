export default function WindStatus(props) {
  return (
    <>
      <div className="big-card">
        <h3>Wind Status</h3>
        <h1>{props.windSpeed} km/hr</h1>
      </div>
    </>
  );
}
