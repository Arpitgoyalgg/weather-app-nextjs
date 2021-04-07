export default function TodayWeather(props) {
  return (
    <>
      <div className="left-part">
        <div>
          {/* div to contain all the elements in the left part */}
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" value="Search for places ..." />
          </div>
          <img src="./sun.svg" />
          <div>
            <span style={{ fontSize: "80px", fontWeight: "lighter" }}>
              {props.currentTemp} <sup className="left-degree"> &#8451;</sup>
            </span>
          </div>
          <span>
            <strong>{props.currentDay}, </strong>
          </span>
          <span>{props.currentTime}</span>
          <hr />
          <h4 className="capatalize">{props.currentLook}</h4>
          <img src="./sun.svg" className="city-image" />
        </div>
      </div>
    </>
  );
}
