export default function TodayWeather() {
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
              12<sup className="left-degree"> &#8451;</sup>
            </span>
          </div>
          <span>
            <strong>Monday,</strong>
          </span>
          <span>16:00</span>
          <hr />
          <h4>Mostly Cloudy</h4>
          <h4>Rain - 30%</h4>
          <img src="./sun.svg" className="city-image" />
        </div>
      </div>
    </>
  );
}
