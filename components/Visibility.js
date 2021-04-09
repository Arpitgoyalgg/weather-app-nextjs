export default function Visibility(props) {
  let visibility = props.visibility / 1000;
  return (
    <>
      <div className="big-card">
        <div className="visibility">
          <h3>Visibility</h3>
          <img src="/visibility.svg" />
        </div>

        <h1>{visibility} km</h1>
      </div>
    </>
  );
}
