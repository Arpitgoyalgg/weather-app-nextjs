export default function WeekCard(props) {
  return (
    <>
      <div className="small-card">
        <h4>{props.weekDay}</h4>
        <img src="./sun.svg" />
        <div className="temp">
          <h4>{props.dayMaxTemp}&#176;</h4>
          <h4 className="min-temp">{props.dayMinTemp}&#176;</h4>
        </div>
      </div>
    </>
  );
}
