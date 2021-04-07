export default function Visibility(props) {
  let visibility = props.visibility / 1000;
  return (
    <>
      <div className="big-card">
        <h3>Visibility</h3>
        <h1>{visibility} km</h1>
      </div>
    </>
  );
}
