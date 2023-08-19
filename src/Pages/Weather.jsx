import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  function handleClick() {
    setLoading(true)
    if (search) {
      setTimeout(() => {
        setLoading(false)
      history.push(`/results?text=${search}`);
        
      }, 600);
    } else {
      alert("please insert city");
    }
  }

  return (
    <section id="page">
      <div className="weather__div">
        <div className="header">
          <h1 className="title">WEATHER APP</h1>
          <div className="input__div">
            <input
              type="text"
              value={search}
              placeholder="Enter City"
              onChange={(event) => setSearch(event.target.value)}
            />
            <div className="icons">
              {loading ? (
                <FontAwesomeIcon icon="fa-solid fa-spinner" />
              ) : (
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
