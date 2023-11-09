import "./aside.css";
import { useState } from "react";

export function AsideLeft() {
  const [toggleState, setToggleState] = useState({
    gaming: true,
    sport: true,
    business: true,
    crypto: true,
    television: true,
    celebrity: true,
    resources: false,
    topic: false,
  });

  const handleClick = (section) => {
    setToggleState({
      ...toggleState,
      [section]: !toggleState[section],
    });
  };

  return (
    <aside className="sidebar-left">
      <section>
        <ul className="sidebar-left-ul font">
          <li>Popular</li>
        </ul>
      </section>
      <section
        style={{
          minHeight: "auto",
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        <h5></h5>
        <div
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
            marginRight: "20px",
          }}
          onClick={() => handleClick("topic")}
        >
          <button
            className="font"
            style={{
              textAlign: "center",
              backgroundColor: "transparent",
              border: "none",
              width: "150px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginLeft: "3px",
            }}
          >
            TOPICS
            <i
              style={{ marginLeft: "30%" }}
              className={`arrow ${toggleState.topic ? "down" : "up"}`}
            />{" "}
          </button>
        </div>
        <div
          style={{
            marginLeft: "15%",
            display: toggleState.topic ? "none" : "block",
          }}
        >
          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("gaming")}
          >
            <button
              className="font"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "0px",
                width: "100px",
                display: "flex",
                gap: "28px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Gaming
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.gaming ? "down" : "up"}`}
              />{" "}
            </button>
          </div>
          <ul
            className="sidebar-ul-toggle gap"
            style={{
              marginTop: "-20px",
              display: toggleState.gaming ? "none" : "block",
            }}
          >
            <li> Valheim </li>
            <li> Ganshin Impact </li>
            <li> Minecraft </li>
            <li> Halo Infinite </li>
            <li> Call of Duty: Warzone </li>
            <li>Path of Exile</li>
            <li>Hollow Knight: SilkSong</li>
            <li>Escape from Tarkov</li>
            <li>Watch Dogs: Legion</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("sport")}
          >
            <button
              className="font"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "1px",
                width: "200px",
                display: "flex",
                gap: "44px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Sport
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.sport ? "down" : "up"}`}
              />{" "}
            </button>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{
              marginTop: "-20px",
              display: toggleState.sport ? "none" : "block",
            }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("business")}
          >
            <button
              className="font"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "4px",
                width: "100px",
                display: "flex",
                gap: "22px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Business
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.business ? "down" : "up"}`}
              />{" "}
            </button>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{
              marginTop: "-20px",
              display: toggleState.business ? "none" : "block",
            }}
          >
            <li>GameStop</li>
            <li>Business</li>
            <li>The Economist</li>
            <li>Bloomberg Business Week</li>
            <li>TASC Traders Magazine</li>
            <li>Barrons</li>
            <li>Forbes</li>
            <li>Financial Times</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("crypto")}
          >
            <button
              className="font"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "2px",
                width: "100vh",
                display: "flex",
                gap: "38px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Crypto
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.crypto ? "down" : "up"}`}
              />{" "}
            </button>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{
              marginTop: "-20px",
              display: toggleState.crypto ? "none" : "block",
            }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>
          <div
            style={{
              textAlign: "start",
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("television")}
          >
            <button
              className="font"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "0px",
                width: "100vh",
                display: "flex",
                gap: "19px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Television
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.television ? "down" : "up"}`}
              />{" "}
            </button>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{
              marginTop: "-20px",
              display: toggleState.television ? "none" : "block",
            }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("celebrity")}
          >
            <button
              className="font"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "3px",
                width: "100vh",
                display: "flex",
                gap: "25px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Celebrity
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.celebrity ? "down" : "up"}`}
              />{" "}
            </button>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{
              marginTop: "-20px",
              display: toggleState.celebrity ? "none" : "block",
            }}
          >
            <li style={{ margin: "10%" }}>NFL</li>
            <li style={{ margin: "10%" }}>NBA</li>
            <li style={{ margin: "10%" }}>Megan Anderson</li>
            <li style={{ margin: "10%" }}>Atlanta Hawks</li>
            <li style={{ margin: "10%" }}>Los Angeles Lakers</li>
            <li style={{ margin: "10%" }}>Boston Celtic</li>
            <li style={{ margin: "10%" }}>Arsenal F.C.</li>
            <li style={{ margin: "10%" }}>Philadelphia 76ers</li>
            <li style={{ margin: "10%" }}>Premier League</li>
            <li style={{ margin: "10%" }}>UFC</li>
          </ul>
        </div>
        <button
          style={{
            width: "100px",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
          className="sidebar-left-button font"
        >
          See more
        </button>
      </section>
      <section style={{ minHeight: "30%", position: "static" }}>
        <div
          style={{ marginLeft: "20px" }}
          onClick={() => handleClick("resources")}
        >
          <button
            className="font"
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "3px",
              width: "100px",
              display: "flex",
              gap: "25px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            RESOURCES
            <i
              style={{ marginLeft: "30%" }}
              className={`arrow ${toggleState.resources ? "down" : "up"}`}
            />{" "}
          </button>
        </div>

        <ul
          className="sidebar-left-ul font"
          style={{ display: toggleState.resources ? "none" : "block" }}
        >
          <li style={{ margin: "10%" }}>About Reddit</li>
          <li style={{ margin: "10%" }}>Advertise</li>
          <li style={{ margin: "10%" }}>Help</li>
          <li style={{ margin: "10%" }}>Blog</li>
          <li style={{ margin: "10%" }}>Careers</li>
          <li style={{ margin: "10%" }}>Press</li>

          <button className="sidebar-left-button font">See more</button>
        </ul>
      </section>
      <p className="sidebar-left-p">
        Reddit, inc. © 2023. All rights reserved.
      </p>
    </aside>
  );
}
