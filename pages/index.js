import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
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

        <div className="right-part">
          <h2>Week</h2>
          <div className="unit-widget">
            <span className="c-widget">&#176;C</span>
            <span className="f-widget">&#176;F</span>
          </div>

          <div className="small-card-container">
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h4>15&#176;</h4>
                <h4 className="min-temp">-3&#176;</h4>
              </div>
            </div>
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h3>15&#176;</h3>
                <h3 className="min-temp">-3&#176;</h3>
              </div>
            </div>
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h3>15</h3>
                <h3 className="min-temp">-3</h3>
              </div>
            </div>
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h3>15&#176;</h3>
                <h3 className="min-temp">-3&#176;</h3>
              </div>
            </div>
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h3>15&#176;</h3>
                <h3 className="min-temp">-3&#176;</h3>
              </div>
            </div>
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h3>15&#176;</h3>
                <h3 className="min-temp">-3&#176;</h3>
              </div>
            </div>
            <div className="small-card">
              <h4>Sun</h4>
              <img src="./sun.svg" />
              <div className="temp">
                <h3>15&#176;</h3>
                <h3 className="min-temp">-3&#176;</h3>
              </div>
            </div>
          </div>
          <h2>Today's Hightlights</h2>
          <div className="big-card-container">
            <div className="big-card">
              <h3>UV Index</h3>
            </div>
            <div className="big-card">
              <h3>Wind Status</h3>
            </div>
            <div className="big-card">
              <h3>Sunrise and Sunset</h3>
            </div>
            <div className="big-card">
              <h3>Humidity</h3>
            </div>
            <div className="big-card">
              <h3>Visibility</h3>
            </div>
            <div className="big-card">
              <h3>Air Quality</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
